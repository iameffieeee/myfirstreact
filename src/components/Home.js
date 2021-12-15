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
        <img src="https://c.tenor.com/UpRSWvHOzhAAAAAi/squidward-handsome.gif" className="App-logo" alt="logo" />
        <p>
        こんにちわ ------ Joanaaaa
        </p>
        <p>{Hello()}</p>
        <Greet name="Squidward" heroName="Grumpy">
          <Message/>
          <img src="https://c.tenor.com/coy85skcAxsAAAAC/spongebob-squidward.gif"/>
        <p>Full Name: Squidward Q. Tentacles</p>
        <p>Species: Giant octopus</p>
        <p>Gender: Male</p>
        <p>Birth date: October 9</p>
        <p>Education: Bikini Bottom School</p>
        <p>Relatives: Mrs. Tentacles (mother)</p>
        <p>Residence: 122 Conch Street, Bikini Bottom, Pacific Ocean</p>
        <p>Occupation: Cashier at the Krusty Krab</p>
        </Greet>
        <Button></Button>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=E5BzhG_sKUw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Squiddy Tentacles
        </a>
        <br></br>
      </header>
    </div>
  );
}

export default Home;