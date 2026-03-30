import React, { use } from 'react';
import Player from '../Player/Player';
const Players = ({ playersPromise, setAvailableBalance, availableBalance}) => {
    const players = use(playersPromise);
    return (

        <div className='max-w-300 mx-auto'>
            
            <div className="grid grid-cols-3 gap-4 m-5">
                {
                    players.map(player => <Player player={player} key={player.id} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance}></Player>)
                }
            </div>
        </div>


    );
};

export default Players;