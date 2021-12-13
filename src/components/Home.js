import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';
import Employee from './Employee';
import NavBar from './NavBar';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
      <br></br>
      <br></br>
        <img src="https://i.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.webp" className="App-logo" alt="logo" />
        <p>
        こんにちわ ------ Joanaaaa
        </p>
        <p>{Hello()}</p>
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

export default Home;