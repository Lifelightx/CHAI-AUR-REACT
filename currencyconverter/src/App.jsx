import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-blue-700 text-2xl'>Currency Converter</h1>
    </>
  )
}

export default App
