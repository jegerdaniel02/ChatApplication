import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        hey
        <p>
          Edit <code>src/App.js</code> and save to reload. DAAAAAAYO
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer /> 
    </div>
  );
}

export default App;
