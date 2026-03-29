
import './App.css'
import navImg from './assets/logo.png'
import navCoin from './assets/Currency@2x.png'
import Players from './component/Players/Players'

const playersPromise = fetch('./player.json').then(res => res.json());

function App() {
  return (
    <div className='max-w-[1200px] mx-auto border-2'>
      <div className="navbar">
        <div className="flex-1">
          <a className=" text-xl">
            <img className='w-[60px] h-[60px]' src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
           <span className='mr-1'>6000000000</span>
           <span className='mr-1'>Coin</span>
           <img src={navCoin} alt="" />
        </div>
      </div>
      <Players playersPromise={playersPromise}></Players>
    </div>
  )
}

export default App
