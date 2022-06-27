import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {

  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyle}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: '#FFFFFF',
  textColor: '#6366F1'

}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}



export default Header