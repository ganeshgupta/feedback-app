import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm({handleAdd}) {

    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")

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
            handleAdd(newFeedback)
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