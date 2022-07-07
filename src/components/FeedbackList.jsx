import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback }) => {
  console.log(feedback)

  // check if there is a feedback
  if (!feedback || feedback.length === 0) {
    return <p>No Feedbakc Yet</p>
  }
  return (<div className="feedback-list">
    {feedback.map((item) => (
      <FeedbackItem key={item.id} item={item} />
    ))}
  </div>)
}

export default FeedbackList
