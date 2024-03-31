// creat greet component using the class have firstname,lastname and data as props and display the firstname and lastname 

import React,{Component} from 'react';


class GreetClass extends Component{
    render(){
        const {firstName, lastName,data} = this.props;
        console.log(data);
        const {address,salary} = data;
        return <h1>Welcome {firstName} and {lastName}  and {salary} and address i s{address.city} in class</h1>
    }
}

export default GreetClass;