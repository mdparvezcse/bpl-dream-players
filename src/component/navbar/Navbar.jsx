import React from 'react';
import navImg from '../../assets/logo.png'
import navCoin from '../../assets/Currency@2x.png'

const Navbar = () => {
    return (
        <div className='max-w-300 mx-auto'>
            <div className="navbar items-center">
                <div className="flex-1">
                    <a className=" text-xl">
                        <img className='w-15 h-15' src={navImg} alt="" />
                    </a>
                </div>
                <div className="flex items-center">
                    <span className='mr-1'>6000000000</span>
                    <span className='mr-1'>Coin</span>
                    <img className='h-5 w-5' src={navCoin} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;