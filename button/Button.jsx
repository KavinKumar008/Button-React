import React, { useState } from 'react'
import CommonButton from './CommonButton'

const Button = ({onClick,label,type='button',...props}) => {

    const [value,setValue]=useState("");

    const handleSubmit=()=>{
        setValue +=10;
        console.log(setValue)
    }
  return (
    <div>
        <input 
        type="text"
        value={value}
        onClick={handleSubmit

        }
        />
     <CommonButton
     label="click!"
     className="submit-button"
     />
    </div>
  )
}

export default Button