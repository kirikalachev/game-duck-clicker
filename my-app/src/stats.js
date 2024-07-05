// import
// let coins = 1000;
// let level = Math.round(coins/100);

// if (level >= 200) {
//   level = 'Max level';
// }

// let profit = 0;

// console.log(level);

function Stats() {
  return (
    <div className="stats">
        <div className="profile-stats">
            <div className="picture"></div>
            <p className="name">user 633923258</p>
        </div>

        <div className="wrapper">
            <div className="level">
              <p>Level 2/100</p>
              <div className="progressBar">
                <div className="progress"></div>
              </div>
            </div>

            <div className="child-wrapper">
                <div className="profit">
                  <p className="mini-text">
                    Profit per hour
                  </p>
                  +34.6K;
                </div>

                <div className="settings">
                  ⚙
                </div>
            </div>
        </div>
    </div>
  );
}

export default Stats;
