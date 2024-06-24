import React, { useState, useEffect } from 'react';
import './components/app.css';
import Counter from './components/Counter';
import InputBox from './components/InputBox';
import './components/InputBox.css';
function App() {
  const [data, setData] = useState("");

  const catInfo = () => {
    
    fetch('https://cat-fact.herokuapp.com/facts')
      .then(res => res.json())
      .then(data => {
        const randData = data[Math.floor(Math.random() *data.length)].text;
        setData(randData);
        console.log(randData);
      })
  }



return (
  <>
    <div className='container'>
      <img src="https://ideogram.ai/assets/progressive-image/balanced/response/o0xxzilgSQujwMKV10Ex8g" id='img' alt="" />
      <p className='text'>{data ? data: 'Loading..'}</p>
      <button onClick={catInfo} className='btn'>Get fact</button>
      <Counter/>
      <InputBox />
    </div>
    
  </>
)
}
export default App
