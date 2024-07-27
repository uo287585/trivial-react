let PlayerInfoComponent = (props) => {
    let {points} = props
    return (
        <div className="player-info">
            <h2>Player Info</h2>
            <p><strong>Points: </strong><span id="playerPoints">{points}</span></p>
        </div>
    )
}

export default PlayerInfoComponent;