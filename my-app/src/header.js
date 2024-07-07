function Stats({level}) {
  const progressBar = level * 10;
  const progressBarStyle = {
      maxWidth: `${progressBar}%`
  };
  
  return (
    <div className="stats">
        <div className="profile-stats">
            <div className="picture"></div>
            <p className="name">user 6338</p>
        </div>
        
        <div className="level">
          <p>{level}/10</p>
          <div className="progressBar">
            <div className="progress" style={progressBarStyle}></div>
          </div>
        </div>
    </div>
  );
}

export default Stats;
