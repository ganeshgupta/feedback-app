import {createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
        id: 1,
        text: 'This item from context 1',
        rating: 8,
        },
        {
        id: 2,
        text: 'This item from context 2',
        rating: 6,
        },
        {
        id: 3,
        text: 'This item from context 3',
        rating: 7,
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })
    // Add feedback
    const addFeedback= (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    // delete feedback
    const deleteFeedback = (id) => {
        
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))      
        }
    }

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // update feedback item 
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }


    return (
        <FeedbackContext.Provider 
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback, 
                editFeedback,
                updateFeedback,
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext