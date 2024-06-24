import {useState} from 'react';
import './Button.css';

const Button =  ()=>{
    const [counter,setCounter] = useState(10);
    const addOne = ()=>{
        if(counter < 20){
            setCounter(counter+1);
        }
    } 
    const removeOne = ()=>{
        if(counter>0){
            setCounter(counter-1);
        }
    }
    const [name, setName] = useState('My name is Jeeban');
    const myName = () =>{
    setName('My name is Pooja');
}

    return(
        <>
        <button onClick={addOne} id='greenBtn' className='btn'>Click Me</button>
        <p>Hello {counter}</p>
        <button onClick={removeOne} id='redBtn' className='btn'>Click me</button>
        <button onClick={myName}>Show My name</button>
        <h2>{name}</h2>
        </>
    )
}

export default Button;