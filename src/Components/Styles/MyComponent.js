import React  from "react";

const MyComponent = () => {

    const inlineStyle = {
        backgroundColor: "lightblue",
        color: "darkblue",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        textAlign: "center"
    }


    return (
        <div style={inlineStyle}>
            <h1>My Component</h1>
        </div>
    )
}

export default MyComponent;