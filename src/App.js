import logo from './logo.svg';
import './App.css';

function App() {
  const personName = [' Sohel', ' Aziz']
  const profession = [' Job/Business', ' Business']
  var name = {
    firstName : 'Mynul',
    secondName : 'Atik',

  }
  var color = {
    backgroundColor: 'cyan',
    color: 'black',
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Person name=" Atik" profession=" Web Dev"></Person>
        <Person name= {personName[0]} profession={profession[0]}></Person>
        <Person name= {personName[1]} profession={profession[1]}></Person>
      </header> 
    </div>
  );
}
function Person(props){
  const personStyle ={
    border: '2px solid red',
    margin: '10px',
    padding: '20px'
  }
  return (
    <div style={personStyle}>
        <h3>Name:{props.name}</h3>
        <h4>Profession:{props.profession}</h4>
    </div>
  )
}

export default App;
