import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';


function App() {
  return (
    <div className="App">
     <Greet firstName="Mahesh" lastName="Kumar"/>
     <Greet firstName="Senthil" lastName="Kumar"/>
     <Greet firstName="Pramod" lastName="Kumar"/>
     <Greet firstName="Sushma" lastName="Kumari"/>
     <Greet firstName="Collins" lastName="Kumar"/>

    </div>
  );
}

export default App;
