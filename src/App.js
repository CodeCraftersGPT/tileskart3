import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import GreetClass from './Components/GreetClass';
import Counter from './Components/Counter';
import User from './Components/useStateObject';

const employee ={
  name:"John",
  age:30,
  salary:100000,
  address:{
    city:"Bangalore",
    state:"Karnataka",
    country:"India"
  },
}



function App() {
  return (
    <div className="App">
      <User/>
      {/* <Counter/> */}
     {/* <Greet firstName="Mahesh" lastName="Kumar" data={employee}/>
     <Greet firstName="Senthil" lastName="Kumar"  data={employee}/>
     <Greet firstName="Pramod" lastName="Kumar" data={employee}/>
     <Greet firstName="Sushma" lastName="Kumari" data={employee}/>
     <Greet firstName="Collins" lastName="Kumar" data={employee}/>
     <GreetClass firstName="Mahesh" lastName="Kumar" data={employee}/> */}
    </div>
  );
}

export default App;
