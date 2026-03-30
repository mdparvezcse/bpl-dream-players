import React, { useState } from 'react';
import './player.css'
import manImg from '../../assets/user 1.png'
import flagImg from '../../assets/report 1.png'

const Player = ({ player, setAvailableBalance, availableBalance}) => {
    const [isSelected, setSelected] = useState(false);
    const handlePlayerData = (player) =>{
        
        const playerPrice = player.price;
        if(playerPrice > availableBalance){
            alert("Not enough balance");
        }
        else{
            setAvailableBalance(availableBalance-player.price);
            setSelected(true);
        }
    }
    return (
        <div className="card space-y-1">
            <img className="rounded-2xl mb-2 h-75 object-cover" src={player.img} alt="" />

            <div className='flex items-center'>
                <img className="w-4 h-4 mr-2" src={manImg} alt="" />
                <h3 className='font-bold'> {player.name}</h3>
            </div>

            <div className="flex justify-between">
                <div className='flex items-center'>
                    <img className='w-4 h-4 mr-2' src={flagImg} alt="" />
                    <h1>{player.country}</h1>
                </div>
                <h1>{player.role}</h1>
            </div>

            <hr className='text-gray-400'/>

            <div className="flex justify-between">
                <p className='font-bold'>Rating</p>
                <p className='font-bold'>{player.rating}</p>
            </div>

            <div className="flex justify-between">
                <p className='font-bold'>{player.batting_style}</p>
                <p className="font-semibold text-gray-600">{player.bowling_style}</p>
            </div>

            <div className="flex justify-between items-center">
                <p className="font-bold">Price: ${player.price}</p>
                <button disabled={isSelected} onClick={()=> handlePlayerData(player)} className="btn text-black hover:bg-[#E7FE29] hover:text-gray-800 hover:font-bold">{isSelected? "Selected" : "Choose Player"}</button>
            </div>

        </div>
    );
};

export default Player;