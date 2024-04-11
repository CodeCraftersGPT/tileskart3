// Define TextInputLS component which takes label,value,onValueChange as props


import React from "react";

function TextInputLS({ label, value, onValueChange }) {

    function handleChange(e) {
        onValueChange(e.target.value);
    }

    return (
        <>
        <h1>{label}</h1>
        <input
            type="text"
            value={value}
            onChange={handleChange}
        />
        </>
    );
    }

    export default TextInputLS;
