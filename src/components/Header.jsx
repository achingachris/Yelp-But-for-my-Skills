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
  bgColor: 'rgba(0,0,0,0.5)',
  textColor: '#ff6a95',
}

// prop types type checking
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
