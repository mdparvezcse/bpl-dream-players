import React from 'react';

const SelectedPlayerCard = ({ player, purchasedPlayer, setPurchasedPlayer ,availableBalance, setAvailableBalance}) => {
    const removePlayer = (id) => {
        const remainingPlayer = purchasedPlayer.filter(Players => id !== Players.id);
        setPurchasedPlayer(remainingPlayer);
        setAvailableBalance(availableBalance+player.price)
        
    }
    return (
        <div>
            {
                <div className='flex justify-between items-center border border-gray-300 shadow-md rounded-xl p-3 m-3'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-20 h-20 object-cover rounded-xl' src={player.img} alt="" />
                        <div className='space-y-2'>
                            <h1 className='font-bold'> {player.name}</h1>
                            <h1 className='font-semibold text-gray-400'> {player.batting_style}</h1>
                        </div>
                    </div>
                    <img onClick={() => removePlayer(player.id)} src="https://i.ibb.co.com/vChz3tLx/Frame.png" alt="" />
                </div>
            }
        </div>
    );
};

export default SelectedPlayerCard;