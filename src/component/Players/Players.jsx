import React, { use } from 'react';
import Player from '../Player/Player';
const Players = ({ playersPromise }) => {
    const players = use(playersPromise);
    return (

        <div className='max-w-300 mx-auto'>
            
            <div className="grid grid-cols-3 gap-4 m-5">
                {
                    players.map(player => <Player player={player} key={player.id}></Player>)
                }
            </div>
        </div>


    );
};

export default Players;