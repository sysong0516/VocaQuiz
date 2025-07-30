import Header from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Game from './pages/Game'
import MainPage from './pages/MainPage'
import Ranking from './pages/Ranking'
import Difficulty from './pages/Difficulty'
import GameResult from './pages/GameResult'
import TopPlayer from './components/TopPlayer'
import TopPlayerHorizontal from './components/TopPlayerHorizontal'
import Name from './pages/Name'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="app-container">
        {location.pathname !== '/rank' && location.pathname != '/game' && <TopPlayer />}
        {location.pathname !== '/rank' && location.pathname != '/game' && <TopPlayerHorizontal/>}
        <Routes>
          <Route path='/' element={<MainPage setScore={setScore} />} />
          <Route path='/name' element={<Name setName={setName} />} />
          <Route path='/game' element={<Game name={name} score={score} setScore={setScore} />} />
          <Route path='/gameResult' element={<GameResult name={name} score={score} />} />
          <Route path='/rank' element={<Ranking />} />
          <Route path='/difficulty' element={<Difficulty />} />
        </Routes>
      </div>
    </>
  )
}

export default App
