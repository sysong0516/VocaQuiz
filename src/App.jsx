import './App.css'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import Game from './pages/Game'
import MainPage from './pages/MainPage'
import Ranking from './pages/Ranking'
import Difficulty from './pages/Difficulty'
import GameResult from './pages/GameResult'
import TopPlayer from './components/TopPlayer'

function App() {
  return (
    <>
      <TopPlayer/>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/gameResult' element={<GameResult/>}/>
        <Route path='/rank' element={<Ranking/>}/>
        <Route path='/difficulty' element={<Difficulty/>}/>
      </Routes>
    </>
  )
}

export default App
