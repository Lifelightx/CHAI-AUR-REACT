
// import Button from "./components/button"
import { useState } from "react";
function App() {

  const [counter, setCounter] = useState(10);

  // var counter = 5;
  const addValue = () => {
    // console.log("Value is ", Math.round(Math.random()*10))
    setCounter(counter + 1);
    if(counter == 20){
      setCounter(counter);
    }
  }

  const removeValue = () => {
    setCounter(counter - 1);
    if(counter == 0){
      setCounter(counter);
    }
  }
  return (
    <>
      <div className="container">

        <h1>Hello This is Jeeban</h1>
        <h3>counter value : {counter}</h3>

        <button
          onClick={addValue}
        >Add value: {counter}</button>
        <br />
        <button onClick={removeValue}
        >Remove value : {counter}</button>
      </div>

    </>
  )
}

export default App
