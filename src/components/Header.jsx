import PropTypes from 'prop-types'

const Header = ({ text, bgColor, textColor }) => {
  // headerstyles
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
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
