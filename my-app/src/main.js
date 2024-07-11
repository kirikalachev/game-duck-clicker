import coin from './coin.png';
import { useEffect, useState } from 'react';
import reward from './reward.png';
import question from './question.png';

function MainPart({buttonStyle, handleClick, coinsCounter, capacity, clicker}) {
      const [isPopupVisible, setIsPopupVisible] = useState(false);
      const [fadeOut, setFadeOut] = useState(false);
      const [clickedClass, setClickedClass] = useState('')
  
      useEffect (
        () => {
            if (isPopupVisible) {
                setIsPopupVisible(true);
                setFadeOut(false);
                setTimeout(() => {
                    setFadeOut(true);
                    setTimeout(() => {
                        setIsPopupVisible(false);
                        setIsPopupVisible(false);
                        setClickedClass('');
                    }, 400); 
                }, 1200);
            }
        }, [isPopupVisible])

        function handleElementClick(className) {
            setClickedClass(className);
            setIsPopupVisible(true);
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

                <div className="shop" onClick={() => handleElementClick('shop')}>
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
            <div className="reward" onClick={() => handleElementClick('reward')}>
                <img src={reward} alt='text'></img>
                <p>Daily Reward</p>
            </div>

            <div className="reward" onClick={() => handleElementClick('reward')}>
                <img src={question} alt='text'></img>
                <p>Daily Question</p>
            </div>
        </div>

        {isPopupVisible && clickedClass==='shop' && (
            <div className='popup'>
                <span className={`comingSoon ${fadeOut ? 'fadeOut' : ''}`}></span>
                <div className={`comingSoon ${fadeOut ? 'fadeOut' : ''}`}>
                    <p>Coming soon</p>
                </div>
            </div>
            )}

        {isPopupVisible && clickedClass==='reward' && (
            <div className="dailyRewardPopup">
                <div className='top'>
                    <img src={reward} alt='Daily reward'></img>
                    <h2>
                        Daily reward
                    </h2>

                    <p>
                        Claim your daily reward!
                    </p>
                </div>

                <div className='content'>

                </div>
                <div className='claimBtn'>

                </div>
            </div>
            )}
      </div>
    );
  }
  
  export default MainPart;