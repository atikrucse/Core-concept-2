import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Razzak', 'Josim', 'Alomgir', 'Salman', 'Shuvo']
  const productsDetails = [
    {name: 'Pen', price: 10},
    {name: 'Book', price: 100}
  ] 
  const personName = [' Sohel', ' Aziz', ' Mazedul']
  const profession = [' Job/Business', ' Business', ' Business']
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
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        
          {
            nayoks.map(nayok => <Person name={nayok}></Person> )
          }
        
        <Person name=" Atik" profession=" Web Dev"></Person>
        <Person name= {personName[0]} profession={profession[0]}></Person>
        <Person name= {personName[1]} profession={profession[1]}></Person>
        <Person name= {personName[2]} profession={profession[2]}></Person>
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
        <h3>{props.name}</h3>
        <h4>{props.profession}</h4>
    </div>
  )
}

export default App;
