import React from 'react'
import { useState } from 'react'

function InputBox() {
    const [value, SetValue] = useState('');
    const handleChange = (e) =>{
        SetValue(e.target.value);
    }
    
  return (
    <div>
      <input id='inp' type="text"
      placeholder='Enter something'
        onChange={handleChange}
      />
      <p id='para'>{value}</p>

    </div>
  )
}

export default InputBox
