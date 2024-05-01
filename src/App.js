import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import GreetClass from './Components/GreetClass';
import Counter from './Components/Counter';
import User from './Components/useStateObject';
import ConditionalRendering from './Components/ConditionalRendering';
import BookList from './Components/BookList';
import CounterClass from './Components/CounterClass';
import LifeCycle from './Components/LifeCycle';
import UserFormLS from './Components/WithLiftStateUp/UserFormLS';
import PostList from './Components/FetchAPI/PostList';
import PostListAxios from './Components/FetchAPI/PostListAxios';
import MyComponent from './Components/Styles/MyComponent';
import MyComponent1 from './Components/Styles/MyComponent1';
import Login from './Components/Styles/Login';
import Registration from './Components/FormAndEventHandling/Registration';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';





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
    <div className="App" style={{ display: 'flex', justifyContent: 'center' }} >

      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="*" element={<Login/>}/>
        </Routes>
      </Router>

      {/* <Registration/> */}

      {/* <MyComponent/>
      <MyComponent1/> */}
      
   
      {/* <PostList/> */}
      {/* <UserFormLS/> */}
      {/* <LifeCycle/> */}
      {/* <CounterClass/> */}
      {/* <BookList/> */}
    
      {/* <ConditionalRendering/> */}
      {/* <User/> */}
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
