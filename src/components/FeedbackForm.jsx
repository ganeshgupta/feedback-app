import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {

    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    //real time text size checking 
    const handleTextChange = (e) => {

        if(text === ""){
            setMessage(null)
            setBtnDisabled(true)
        }else if(text !="" && text.trim().length <=8){
            setMessage("Text must be at least 10 characters")
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }
    // onSubmit - 
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length >10 ){
            const newFeedback = {
                text,
                rating,
            }
            
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }
            setText("")

        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h1>Rate your experience with our service</h1>
            <RatingSelect select={(rating) => setRating(rating)}/> 
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="write a review"
                value={text}
                />
                <Button type="submit" isDisable={btnDisabled}>
                    Send
                </Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}
export default FeedbackForm