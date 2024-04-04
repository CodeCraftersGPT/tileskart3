import { useState } from "react";

function ConditionalRendering(){
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [userName,setUserName] = useState("");

    function login(){
        setIsLoggedIn(true);
    }

    function logout(){
        setIsLoggedIn(false);
        setUserName("");
    }

    function handleChange(event){
        setUserName(event.target.value);
    }

    return (
        <>
            {isLoggedIn ? 
            <div>
                <h1>Welcome {userName}</h1>
                <button onClick={logout}>Logout</button>
            </div>
            :
            <div>
                <input type="text" value={userName} onChange={handleChange}/>
                <button onClick={login}>Login</button>
            </div>
            }
        </>
    )
}

export default ConditionalRendering;