import './App.css';
import Stats from './header.js';
import MainPart from './main.js';
import { useState, useEffect } from 'react';

function App() {
  const [scale, setScale] = useState(1);
    const [coinsCounter, setCoinsCounter] = useState(0);
    const [capacity, updateCapacity] = useState(100);
    const [profit, updateProfit] = useState(0);
    const [level, updateLevel] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            updateCapacity(prev => (prev < 100 ? prev + 1 : 100));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const handleClick = (e) => {
        setScale(1.05);
        setTimeout(() => setScale(1), 100);
        
        if (capacity > 0) {
            updateCapacity(prev => prev - 1);
            setCoinsCounter(prev => prev + 1);
        }
    };

    const buttonStyle = {
        transform: `scale(${scale})`,
        transition: `transform 0.2s`,
    };

  return (
    <div className="App">
      <div className='gameName'>
        TAP GAME
      </div>
      <Stats 
        level={level}
      />

      <MainPart 
        buttonStyle={buttonStyle}
        handleClick={handleClick}
        coinsCounter={coinsCounter}
        capacity={capacity}
        profit={profit}
        level={level}
      />
    </div>
  );
}

export default App;
