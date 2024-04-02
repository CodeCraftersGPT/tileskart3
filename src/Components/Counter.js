import { useState } from "react";

function Counter(){
    const [count] = useState(10);
    return (
        <div>
            <h1>Counter : {count}</h1>
        </div>
    )
}

export default Counter; 
