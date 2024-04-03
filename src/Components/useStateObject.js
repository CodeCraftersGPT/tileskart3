import { useState } from "react";


function User(){

    const empployee = {name:"Ravi",age:21,salary:10000,married:true}
    let [user,setUser] = useState(empployee);

    return (
        <>
            <h1>user name is {user.name} and age is {user.age} </h1>
            <h1>user salary is {user.salary} and married is {user.married} </h1>
        </>
    )
}

export default User;