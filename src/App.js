import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <button class="outsideBtn">Duplicate</button>
      <button class="outsideBtn">Background</button>
      <button class="outsideBtn">Heading</button>
      <button class="outsideBtn">Delete</button>

      <div class="card">
        <h1 class="title">Chad of Cyber IST</h1>

        <img class="giaImg" src="https://media.discordapp.net/attachments/963095262363017246/1020131830323744788/unknown.png?width=468&height=468" alt="Professor Giacobe"/>
  
        <div class="textbox">
          <details>
            <summary class="haxbtn">Details</summary>
            <p class="description pScale">Professor Giacobe may look like a simple man but perceptions can be misleading. Underneath the facade of a simple college of IST professor lies the holiness of an <strong>IST GOD</strong>!</p>
          </details>

        </div>
      </div>
    </div>
  );
}

export default App;
