import './App.css';
import logo from './images/logo.svg';

function App() {
  return (
    <main className="App">
      <div className="background"></div>
      <section className="content">
        <div className="brandWrapper">
        <img className="logo" src={logo} alt="logo" />
        <div className="textWrapper">
          <h1>Bricyn Abel</h1>
          <h2>AbelNet Web Services</h2>
        </div>
        </div>
        <div className="buttonsWrapper">
            <a href="https://www.linkedin.com/in/bricynabel/"><div className="btn">LinkedIn</div></a>
            <a href="https://drive.google.com/file/d/1SHEk_YehYj31gXk7FCZTqFXohd6GNquS/view?usp=sharing"><div className="btn">Resume</div></a>
            <a href="https://github.com/babel5405"><div className="btn">Github</div></a>
        </div>
      </section>
    </main>
  );
}

export default App;
