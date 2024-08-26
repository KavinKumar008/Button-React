import React, { useState } from 'react'
import CommonButton from './CommonButton'
import "./styles.css"
import Button from './Button';


const FormComponent = () => {

    const [inputValue,setInputValue]=useState('');

    const handleSubmit=()=>{
      alert(`Submitting :${inputValue}`);
    }

  return (
    <div>
        <input 
        type="text"
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
        />
        <CommonButton
        onClick={handleSubmit}
        label="Submit"
        className="submit-button"
        />

        <Button/>
    </div>
  )
}

export default FormComponent