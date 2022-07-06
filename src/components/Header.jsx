import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return (
    <header>
      <div className='container'>
        <h1>{text}</h1>
      </div>
    </header>
  )
}

// default props
Header.defaultProps = {
  text: 'Live Feedback',
}

// prop types
Header.propTypes = {
  text: PropTypes.string,
}

export default Header
