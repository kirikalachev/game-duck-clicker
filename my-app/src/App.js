import './App.css';
import './popups.css';
import Stats from './header.js';
import MainPart from './main.js';
import React, { useState, useEffect } from 'react';

import clicker1 from './clicker1.png';
import clicker2 from './clicker2.png';
import clicker4 from './clicker4.png';
import clicker6 from './clicker6.png';
import clicker8 from './clicker8.png';
import clicker10 from './clicker10.png';



function App() {
    const [clicker, setClicker] = useState(clicker1)
    const [scale, setScale] = useState(1);
    const initialCoinsCount = () => Number(window.localStorage.getItem('Coins amount'));
    const [coinsCounter, setCoinsCounter] = useState(initialCoinsCount);

    const initialCapacity = () => Number(window.localStorage.getItem('Capacity'));
    const [capacity, updateCapacity] = useState(initialCapacity);

    const [level, updateLevel] = useState(0);

    useEffect(() => {
      window.localStorage.setItem('Coins amount', coinsCounter);
    }, [coinsCounter]);

    useEffect(() => {
      window.localStorage.setItem('Capacity', capacity);
    }, [capacity]);


    const calculateLevel = (coinsCounter) => {
      if (coinsCounter >= 4500) {
        setClicker(clicker10);
        return 10;
    } else if (coinsCounter >= 3600) {
        return 9;
    } else if (coinsCounter >= 2800) {
      setClicker(clicker8);
        return 8;
    } else if (coinsCounter >= 2100) {
        return 7;
    } else if (coinsCounter >= 1500) {
      setClicker(clicker6);
        return 6;
    } else if (coinsCounter >= 1000) {
        return 5;
    } else if (coinsCounter >= 600) {
      setClicker(clicker4);
        return 4;
    } else if (coinsCounter >= 400) {
        return 3;
    } else if (coinsCounter >= 150) {
      setClicker(clicker2);
        return 2;
    } else if (coinsCounter >= 100) {
        return 1;
    } else {
        return 0;
    }
  };

    useEffect(() => {
        const interval = setInterval(() => {
            updateCapacity(prev => (prev < 1000 ? prev + 1 : 1000));
        }, 1000);

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
    <Router>
          <div className="App">
      <div className='gameName'>
        TAP GAME
      </div>
      <Stats 
        level={level}
      />
      <span className='blurBG'></span>

      <Routes>
        <Route path='/' element={
                <MainPart 
                buttonStyle={buttonStyle}
                handleClick={handleClick}
                coinsCounter={coinsCounter}
                capacity={capacity}
                clicker={clicker}
                setCoinsCounter={setCoinsCounter}
              />
        }/>
        <Route path="/shop" element={<Shop />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
