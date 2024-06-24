import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbers] = useState(false);
  const [charAllowed, setChars] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordGen = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numbersAllowed) str += '0987654321';
    if (charAllowed) str += '!@#$%^&*()_+=-{|":;?/';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numbersAllowed, charAllowed, setPassword])

  return (
    <>
      <div className=' bg-slate-600 h-auto rounded-lg py-4 font-poppins'>
        <div>
          <h1 className=' font-bold text-slate-900 text-2xl' >Password Generator</h1>
          <div class="flex p-4 w-auto justify-center  items-center space-x-2">
            <input
              class="h-8 w-80 px-2 font-poppins outline-none"
              type="text"
              placeholder="Password"
              value={Password}


            />
            <input type="button" onClick={passwordGen} value="Generate" className='h-8 bg-emerald-400 w-24' />

          </div>
          <div className='flex justify-space justify-around'>
            <div>
              <input type="range"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                min={6} max={14} />
              <label htmlFor="" className='text-white mx-1' >Length: {length}</label>
            </div>
            <div>
              <input type="checkbox" 
                defaultChecked = {numbersAllowed}
                onChange={(e)=>{
                  setNumbers( (prev) => !prev);
                }}
                />
              <label htmlFor="" className='text-white mx-1'>Numbers</label>
                
            </div>
            <div>
            <input type="checkbox" 
                defaultChecked = {charAllowed}
                onChange={(e)=>{
                  setChars( (prev) => !prev);
                }}
              />
              <label htmlFor="" className='text-white mx-2'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
