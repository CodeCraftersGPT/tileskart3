// create greet component in reactjs which displays simple greet message.

import React from 'react';

function Greet (props) {
    return (
        <div>
            <h1>Welcome {props.firstName} and {props.lastName}</h1>
        </div>
    )
}

export default Greet;

