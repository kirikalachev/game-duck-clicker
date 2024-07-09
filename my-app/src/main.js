import coin from './coin.png';
import { useState } from 'react';
import reward from './reward.png';
import question from './question.png';

function MainPart({buttonStyle, handleClick, coinsCounter, capacity, clicker}) {
      const [isPopupVisible, setIsPopupVisible] = useState(false);
      const [fadeOut, setFadeOut] = useState(false);
  
      function showPopup() {
          setIsPopupVisible(true);
          setFadeOut(false);
          setTimeout(() => {
              setFadeOut(true);
              setTimeout(() => {
                  setIsPopupVisible(false);
              }, 400); // Match this duration with the fade-out animation duration
          }, 1200); // Automatically start fade-out after 1 second
      }

    return (
      <div className="main">
        <div className="menu">
            <div className="navigation">
                <div className="home">
                    <p>
                        Home
                    </p>
                </div>

                <div className="shop" onClick={showPopup}>
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
            <div className="reward" onClick={showPopup}>
                <img src={reward} alt='text'></img>
                <p>Daily Reward</p>
            </div>

            <div className="reward" onClick={showPopup}>
                <img src={question} alt='text'></img>
                <p>Daily Question</p>
            </div>
        </div>

        {isPopupVisible && (
            <div className='popup'>
                <span className={`comingSoon ${fadeOut ? 'fadeOut' : ''}`}></span>
                <div className={`comingSoon ${fadeOut ? 'fadeOut' : ''}`}>
                    <p>Coming soon</p>
                </div>
            </div>
            )}
      </div>
    );
  }
  
  export default MainPart;