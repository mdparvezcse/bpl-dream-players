import React from 'react';
import './player.css'

const Player = ({ player }) => {

    console.log(player);
    return (
        <div className="card">
            <img src={player.img} alt="" />
            <h3>{player.name}</h3>
            <div className="flex justify-between">
                <h1>{player.country}</h1>
                <h1>{player.role}</h1>
            </div>
            <hr/>

            <div className="flex justify-between">
                <p>Rating</p>
                <p>{player.rating}</p>
            </div>

            <div className="flex justify-between">
                <p>{player.batting_style}</p>
                <p>{player.bowling_style}</p>
            </div>
            <div className="flex justify-between">
                <p>Price: ${player.price}</p>
                <button>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;