import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(10);

    function incrementCount(){
        setCount(count+1);
    }
    
    return (
       <>
            <h1>Counter : {count}</h1>
            <button onClick={incrementCount}>Increment</button>
       </>
    )
}

export default Counter; 
