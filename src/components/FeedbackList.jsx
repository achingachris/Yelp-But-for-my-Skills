import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, hanldeDelete }) => {

  // check if there is a feedback
  if (!feedback || feedback.length === 0) {
    return <p>No Feedbakc Yet</p>
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          hanldeDelete={hanldeDelete}
        />
      ))}
    </div>
  )
}

export default FeedbackList
