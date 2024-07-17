import coin from './coin.png';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reward from './reward.png';
import question from './question.png';

function MainPart({buttonStyle, handleClick, coinsCounter, capacity, clicker, setCoinsCounter}) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const [isRewardVisible, setIsRewardVisible] = useState(false);
    const [clickedClass, setClickedClass] = useState('');   

    const [canClaimReward, setCanClaimReward] = useState(true);

    const prizes = [100, 500, 1000, 5000, 10000];
    const [prize, setPrize] = useState(prizes[-1]);

    useEffect(() => {
        checkDailyRewardAvailability();
    }, []);

    function claimDailyReward() {
        if (!canClaimReward) return;
        setIsRewardVisible(false);
        setClickedClass('');
        saveLastClaimDate();
        setCoinsCounter(prev => (prev + prize));
        setCanClaimReward(false);
    }

    function saveLastClaimDate() {
        const currentDate = new Date().toISOString().split('T')[0];
        localStorage.setItem('lastClaimDate', currentDate);
    }

    function checkDailyRewardAvailability() {
        const lastClaimDate = localStorage.getItem('lastClaimDate');
        const currentDate = new Date().toISOString().split('T')[0];

        const lastClaimDateObject = new Date(lastClaimDate);
        const currentDateObject = new Date(currentDate);

        if (!lastClaimDate || lastClaimDateObject < currentDateObject) {
            setCanClaimReward(true);
        } else {
            setCanClaimReward(false);
        }
    }

    useEffect(() => {
        updatePrize();
    }, [canClaimReward]);

    function updatePrize() {
        setPrize(prevPrize => {
            const currentIndex = prizes.indexOf(prevPrize);
    
            // Save current index to localStorage
            localStorage.setItem('currentIndex', currentIndex);
    
            // Retrieve and parse the current index from localStorage
            const savedCurrentIndex = parseInt(localStorage.getItem('currentIndex'), 10);
    
            // Calculate the next index
            const nextIndex = (savedCurrentIndex + 1) % prizes.length;
    
            // Save next index to localStorage (this is optional, you can use current index only)
            localStorage.setItem('nextIndex', nextIndex);
    
            // Return the next prize
            return prizes[nextIndex];
    })
}
        

    function comingSoonPopup() {
        setIsPopupVisible(true);
        setFadeOut(false);
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setIsPopupVisible(false);
            }, 400);
        }, 1000);
    }

    function close() {
        setIsRewardVisible(false);
        setClickedClass('');
    }

    useEffect(() => {
        if (isRewardVisible) {
            setIsRewardVisible(true);
        }
    }, [isRewardVisible]);

    function handleElementClick(className) {
        setClickedClass(className);
        setIsRewardVisible(true);
    }

    return (
        <div className="main">
            <div className="menu">
                <div className="navigation">
                    <div className="home">
                        <p>Home</p>
                    </div>
                    <div className="shop" onClick={comingSoonPopup}>
                        <Link to="/shop">
                            <p>Shop</p>
                        </Link>
                    </div>
                </div>

                <div className="info">
                    <div className="capacity">
                        <h6>Capacity</h6>
                        <p>{capacity}</p>
                    </div>
                    <div className="border"></div>
                    <div className="profit">
                        <h6>Profit</h6>
                        <p></p>
                    </div>
                </div>
            </div>

            <div className="clicker">
                <div className="coinsAmount">
                    <img src={coin} alt='Coins amount:' />
                    <p>{coinsCounter}</p>
                </div>
                <button className="clickerBtn" style={buttonStyle} onClick={handleClick}>
                    <img src={clicker} alt='Tap me!' />
                </button>
            </div>

            <div className="rewards">
                <div className="reward" onClick={() => handleElementClick('dailyReward')}>
                    <img src={reward} alt='text' />
                    <p>Daily Reward</p>
                </div>

                <div className="reward" onClick={() => handleElementClick('questionReward')}>
                    <img src={question} alt='text' />
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

            {isRewardVisible && clickedClass === 'dailyReward' && (
                <div className="dailyRewardPopup">
                    <button onClick={close}>x</button>
                    <div className='top'>
                        <img src={reward} alt='Daily reward' />
                        <h2>Daily reward</h2>
                        <p>Claim your daily reward!</p>
                    </div>
                    <div className='content'>
                        <img src={coin} alt='Coins amount: ' />
                        <p>{prize}</p>
                    </div>
                    <div className='claimBtn' onClick={claimDailyReward}>
                        Claim
                    </div>
                </div>
            )}

            {isRewardVisible && clickedClass === 'questionReward' && (
                <div className="dailyRewardPopup">
                    <button onClick={close}>x</button>
                    <div className='top'>
                        <img src={question} alt='Daily question' />
                        <h2>Daily question</h2>
                        <p>Answer the question to win more coins</p>
                    </div>
                    <div className='content'></div>
                    <div className='claimBtn'>
                        Claim
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainPart;
