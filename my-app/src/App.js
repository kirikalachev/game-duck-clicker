import './App.css';
import Stats from './stats.js';
import Clicker from './clicker.js';

function App() {
  return (
    <div className="App">
      <div className='gameName'>
        Duck Game
      </div>
      <Stats />
      <Clicker />
    </div>
  );
}

export default App;
