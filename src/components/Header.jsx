import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    const headerColors = {
        backgroundColor: bgColor,
        color: textColor,
    }

  return (
    <header style={headerColors}>
        <div className='container'>
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback', 
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header