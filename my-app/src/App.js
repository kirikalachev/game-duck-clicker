import './App.css';
import Stats from './header.js';
import MainPart from './main.js';
import { useState, useEffect } from 'react';

function App() {

  const [scale, setScale] = useState(1);
    const [coinsCounter, setCoinsCounter] = useState(0);
    const [capacity, updateCapacity] = useState(100);
    const [level, updateLevel] = useState(0);

    const calculateLevel = (coinsCounter) => {
      if (coinsCounter >= 4500) {
        return 10;
    } else if (coinsCounter >= 3600) {
        return 9;
    } else if (coinsCounter >= 2800) {
        return 8;
    } else if (coinsCounter >= 2100) {
        return 7;
    } else if (coinsCounter >= 1500) {
        return 6;
    } else if (coinsCounter >= 1000) {
        return 5;
    } else if (coinsCounter >= 600) {
        return 4;
    } else if (coinsCounter >= 400) {
        return 3;
    } else if (coinsCounter >= 150) {
        return 2;
    } else if (coinsCounter >= 100) {
        return 1;
    } else {
        return 0;
    }
  };

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

    useEffect(() => {
      const newLevel = calculateLevel(coinsCounter);
      if (newLevel > level) {
          updateLevel(newLevel);
      }
    }, [coinsCounter, level]);

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
      />
    </div>
  );
}

export default App;
