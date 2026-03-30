
import './App.css'

import Players from './component/Players/Players'
import { Suspense, useState } from 'react';
import Navbar from './component/navbar/Navbar';
import SubNavbar from './component/navbar/SubNavbar';
import SelectedPlayer from './component/selectedPlayer/SelectedPlayer';

const playersPromise = fetch('./player.json').then(res => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);


  const handleToggle = (value) => {
    setToggle(value);
  }
  return (
    <div>
      <Navbar availableBalance={availableBalance}></Navbar>
      <SubNavbar handleToggle={handleToggle} toggle={toggle}></SubNavbar>

      {
        toggle === true ?
          <Suspense fallback={<h2>Loading<span className="loading loading-ball loading-xl"></span><span className="loading loading-ball loading-xl"></span><span className="loading loading-ball loading-xl"></span></h2>}>
            <Players
              playersPromise={playersPromise}
              setAvailableBalance={setAvailableBalance}
              availableBalance={availableBalance}
              setPurchasedPlayer={setPurchasedPlayer}
              purchasedPlayer={purchasedPlayer}
            ></Players>
          </Suspense>
          : <SelectedPlayer purchasedPlayer={purchasedPlayer}></SelectedPlayer>
      }

    </div>
  )
}

export default App
