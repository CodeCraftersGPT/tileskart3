// import the TextInputLS
// define the state for name and email
// create a function to handle the name and email change
// pass the name and email to the TextInputLS component
// handle submit function to submit the form

import React, { useState } from "react";
import TextInputLS from "./TextInputLS";

function UserFormLS() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleNameChange(name) {
        setName(name);
    }

    function handleEmailChange(email) {
        setEmail(email);
    }

    function handleSubmit() {
        console.log("Name:", name);
        console.log("Email:", email);
        // we can send the data to the server
    }

    return (
        <div>
        <TextInputLS label="Name" value={name} onValueChange={handleNameChange} />
        <TextInputLS label="Email" value={email} onValueChange={handleEmailChange} />
        <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default UserFormLS;