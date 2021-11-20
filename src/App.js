import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <br></br>
      <br></br>
        <img src="https://i.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.webp" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. ------ Joanaaaa
        </p>
        <p>{Hello()}</p>
        <Employee/>
        <Greet name="Peter" heroName="spiderman">
          <Message/>
        <p>this is children props</p>
        </Greet>
        <Greet name="Tony" heroName="iron man">
        <Button></Button>
        </Greet>
        <Greet name="Thor" heroName="Thor"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
      </header>
    </div>
  );
}

export default App;
