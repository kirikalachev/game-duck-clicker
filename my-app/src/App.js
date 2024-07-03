import './App.css';
import Stats from './stats.js';
import Clicker from './clicker.js';
import Navigation from './navigation.js';

function App() {
  return (
    <div className="App">
      <div className='gameName'>
        Duck Game
      </div>
      <Stats />
      <Clicker />
      <Navigation />
    </div>
  );
}

export default App;
