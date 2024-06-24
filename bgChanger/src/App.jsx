import { useState } from 'react'



function App() {
  const [color, setColor] = useState('#FFF');
  const makeRed = () =>{
    setColor('red');
  }
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

        <div className=' flex justify-center flex-wrap pt-10'>
          <div className='bg-sky-200 px-4 py-2  rounded-2xl h-12 w-auto flex justify-center align-middle gap-3'>
            <button type='button' className='rounded-full px-4  text-white shadow-lg' style={{backgroundColor:'red'}} onClick={()=> setColor('red')} > Red</button>
            <button type='button' className='rounded-full px-4  text-white shadow-lg' style={{backgroundColor:'green'}} onClick={()=> setColor('green')}> Green</button>
            <button type='button' className='rounded-full px-4  text-white shadow-lg' style={{backgroundColor:'blue'}} onClick={()=> setColor('blue')}> Blue</button>
            <button type='button' className='rounded-full px-4  text-white shadow-lg' style={{backgroundColor:'black'}}onClick={()=> setColor('black')}> Black</button>
            <button type='button' className='rounded-full px-4  text-white shadow-lg' style={{backgroundColor:'yellow'}} onClick={()=> setColor('yellow')}> Yellow</button>
            <button type='button' className='rounded-full px-4  text-white shadow-lg' style={{backgroundColor:'purple'}} onClick={()=> setColor('purple')}> Purple</button>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default App
