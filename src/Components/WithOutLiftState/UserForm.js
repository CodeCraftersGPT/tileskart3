// create UserForm Component. define the TextInput component in the UserForm component for capturing email and name

import TextInput from "./TextInput";

function UserForm() {

    function handleSubmit() {
        console.log("Name:", name);
        console.log("Email:", email);
        // we can send the data to the server
    }
    
    return (
        <div>
        <TextInput label="Name" />
        <TextInput label="Email" />
        {/* button to submit the form */}
        <button onClick={handleSubmit}>Submit</button>
        </div>
    );
    }

    export default UserForm;
