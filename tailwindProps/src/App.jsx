
import './App.css'
import Card from './components/Card';
function App() {
  let myObj = {
    username : 'Jeeban',
    age : 12,
    name : 'Code'
  }

  return (
    <>
      {/* <h1 className='text-3xl font-bold bg-sky-500 text-white p-8 w-96 rounded'>Jeebanjyoti Mallik</h1> */}
      <Card author="Pooja" btnObj = "visit me"/>
      <Card author="Jeeban" btnObj="click me" />

      
      
    </>
  )
}

export default App
