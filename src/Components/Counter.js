import { useState,useEffect } from "react";

function Counter(){
    const [count,setCount] = useState(10);
    const [name,setName] = useState('kumar');
    const PI = 3.14;

    useEffect(()=>{
        console.log('component is mounted');
        return ()=>{
            console.log('component is unmounted');
        }

    },[]
    )

    useEffect(()=>{
        console.log('component is updated for count : '+count);
        return ()=>{
            console.log('component is unmounted');
        }
    }
    ,[count]
    )

    useEffect(()=>{
        console.log('component is updated for name : '+name);
    }
    ,[name]
    )

    
    useEffect(()=>{
        console.log('component is updated for name1 : '+name);
        console.log('component is updated for count1 : '+count);
    }
    ,[name,count]
    )



    function incrementCount(){
        setCount(count+1);
    }

    function updateName(){
        setName('vikram');
    }
    
    return (
       <>
            <h1>Counter : {count}</h1>
            <h1> Name : {name}</h1>
            <h1>PI : {PI}</h1>  
            <button style={{ height: '50px', width: '80px', margin: '20px' }} onClick={incrementCount}>Increment</button>
            <button style={{ height: '50px', width: '90px', margin: '20px' }} onClick={updateName}>updateName</button>
       </>
    )
}

export default Counter; 
