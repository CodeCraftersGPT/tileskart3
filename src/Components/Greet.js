// create greet component in reactjs which displays simple greet message.

function Greet(props){

    // state. if the component has any data. we should ideally keep them inside the state.

    const {firstName, lastName,data} = props;
    console.log(data);
    const {address,salary} = data;

    
    return  <h1>Welcome {firstName} and {lastName}  and {salary} and address i s{address.city}</h1>
}

export default Greet;