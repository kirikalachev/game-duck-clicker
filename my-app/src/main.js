import coin from './coin.png';

import reward from './reward.png';
import question from './question.png';
// import { useState } from 'react';


function MainPart({buttonStyle, handleClick, coinsCounter, capacity, clicker, comingSoon }) {
    
    return (
      <div className="main">
        <div className="menu">
            <div className="navigation">
                <div className="home">
                    <p>
                        Home
                    </p>
                </div>

                <div className="shop" onClick={comingSoon}>
                    <p>
                        Shop
                    </p>
                </div>
            </div>

            <div className="info">
                <div className="capacity">
                    <h6>
                        Capacity
                    </h6>
                    <p>
                        {capacity}
                    </p>
                </div>
                <div className="border"></div>
                <div className="profit">
                    <h6>
                        Profit
                    </h6>
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>

        <div className="clicker">
            <div className="coinsAmount">
                <img src={coin} alt='Coins amount:'></img>
                <p>
                    {coinsCounter}
                </p>
            </div>
            <button className="clickerBtn" style={buttonStyle} onClick={handleClick}>
                <img src={clicker} alt='Tap me!'></img>
            </button>
        </div>

        <div className="rewards">
            <div className="reward">
                <img src={reward} alt='text'></img>
                <p>Daily Reward</p>
            </div>

            <div className="reward">
                <img src={question} alt='text'></img>
                <p>Daily Question</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default MainPart;