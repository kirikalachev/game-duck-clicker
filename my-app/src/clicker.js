import dailyQuestion from './dailyQuestion.png';
import dailyReward from './dailyReward.png';
import coin from './coin.png';
import clicker from './clicker.png';

function Clicker() {
  return (
    <div className="main">
      <div className="navigation">
          <div className="quest dailyReward">
            <img src={dailyReward} alt='Daily Reward'></img>
          </div>

          <div className="quest dailyQuestion">
            <img src={dailyQuestion} alt='Daily Question'></img>
          </div>

          <div className="quest dailyCombo">
              
          </div>
      </div>
      
      <div className="clicker">
        <div className="coinsCounter">
          <p>
            66,774,259
          </p>
          <img src={coin} alt='Coins:'></img>
        </div>

        <div className='clickerButton'>
          <img src={clicker} alt='Click me'></img>
        </div>

        <div className="">
          <div className="coinsLeft">
            <img src={} alt='Coins left:'></img>
          </div>

          <div className="boost">
            <img src={} alt='More coins'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clicker;

/* <div className="coinsLeft"></div>
<div className="boost"></div> */