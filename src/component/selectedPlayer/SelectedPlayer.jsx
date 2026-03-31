import React from 'react';
import Player from '../Player/Player';
import SelectedPlayerCard from '../selectedPlayerCard/SelectedPlayerCard';

const SelectedPlayer = ({ purchasedPlayer, setPurchasedPlayer, availableBalance, setAvailableBalance }) => {

    return (
        <div className='max-w-300 mx-auto'>
            {
                purchasedPlayer.map(player => <SelectedPlayerCard
                    player={player}
                    key={player.id}
                    purchasedPlayer={purchasedPlayer}
                    setPurchasedPlayer={setPurchasedPlayer}
                    availableBalance={availableBalance}
                    setAvailableBalance={setAvailableBalance}
                ></SelectedPlayerCard>)
            }
        </div>
    );
};

export default SelectedPlayer;