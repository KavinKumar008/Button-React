import React from 'react'
import "./styles.css"

const CommonButton = ({onClick,label,className,type='button',...props}) => {


  return (
    <button 
    type={type}
    onClick={onClick}
    className={className}
    {...props}
    >
      {label}
    </button>
  )
}

export default CommonButton