import PropTypes from 'prop-types'
import React from 'react'

const Button = ({color, text}) => {

const onClick=()=>{

    console.log('Click')

}

  return <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text} </button>   
}

Button.defaultProps={
    color:'steelblue'
}

Button.propTypes={

    text: PropTypes.string,
    color: PropTypes.string
}

export default Button