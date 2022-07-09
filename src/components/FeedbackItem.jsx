import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card.jsx'

const FeedbackItem = ({ item, hanldeDelete }) => {
  // const handleClick = () => {}

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => hanldeDelete(item.id)}>
        <FaTimes color='red' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}
