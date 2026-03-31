import React from 'react';

const SubNavbar = ({ handleToggle, toggle, purchasedPlayer}) => {
    
    return (
        <div className='max-w-300 mx-auto'>
            <div className='flex justify-between items-center m-5'>

                {
                    toggle === true ?
                        <h2 className='font-bold text-2xl'>Available Players</h2>
                        :<h2 className='font-bold text-2xl'>Selected Players({purchasedPlayer.length}/6)</h2>
                }
                <div>
                    <button onClick={() => handleToggle(true)} className={`btn btn-soft rounded-l-xl rounded-r-0 border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}>Available</button>
                    <button onClick={() => handleToggle(false)} className={`btn btn-soft rounded-r-xl rounded-l-0 border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected
                        <span>{purchasedPlayer.length}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;