import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(10);
    const PI = 3.14;
    let name = 'kumar';

    function incrementCount(){
        setCount(count+1);
    }

    function updateName(){
        name = 'vikram';
    }
    
    return (
       <>
            <h1>Counter : {count}</h1>
            <h1> Name : {name}</h1>
            <h1>PI : {PI}</h1>  
            <button onClick={incrementCount}>Increment</button>
            <button onClick={updateName}>updateName</button>
       </>
    )
}

export default Counter; 
