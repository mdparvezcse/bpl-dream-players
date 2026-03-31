
import './App.css'
import { ToastContainer} from 'react-toastify';
import Players from './component/Players/Players'
import { Suspense, useState } from 'react';
import Navbar from './component/navbar/Navbar';
import SubNavbar from './component/navbar/SubNavbar';
import SelectedPlayer from './component/selectedPlayer/SelectedPlayer';

const playersPromise = fetch('./player.json').then(res => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(10000000);
  const [purchasedPlayer, setPurchasedPlayer] = useState([]);


  const handleToggle = (value) => {
    setToggle(value);
  }
  return (
    <div>
      <Navbar availableBalance={availableBalance}></Navbar>
      <SubNavbar handleToggle={handleToggle} toggle={toggle} purchasedPlayer={purchasedPlayer}></SubNavbar>

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
          : <SelectedPlayer
            purchasedPlayer={purchasedPlayer}
            setPurchasedPlayer={setPurchasedPlayer}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
          ></SelectedPlayer>
      }
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
