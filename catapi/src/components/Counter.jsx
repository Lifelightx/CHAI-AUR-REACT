import React from 'react'
import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(2);
    setTimeout(()=>{
        setCount(count+1);
    },10000);
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default Counter
