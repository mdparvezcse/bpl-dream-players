import React, { use } from 'react';
import Player from '../Player/Player';
const Players = ({ playersPromise }) => {
    const players = use(playersPromise);
    return (
        <>
            <div className='flex justify-between m-[20px]'>
                <h2>Available Players</h2>
                <div>
                    <button>Available</button>
                    <button>Selected
                        (<span>0</span>)
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 m-[20px]">
                {
                    players.map(player => <Player player={player} key={player.id}></Player>)
                }
            </div>
        </>

    );
};

export default Players;