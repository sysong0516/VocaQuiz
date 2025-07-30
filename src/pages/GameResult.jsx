import { useNavigate } from "react-router-dom"
import './Game.css'

function GameResult({ name, score }) {
  const navigate = useNavigate()
  const rank = JSON.parse(localStorage.getItem('rank'));
  let playedUser;
  rank.map((data, i) => {
    if (data.name == name) {
      playedUser = i;
    }
  })
  return (
    <div className="game-bg">
      <div className="game-container">
        <p>{name}님의 점수는 {rank[playedUser].score}점~</p>
        <p>Rank : {rank[playedUser].rank}등</p>
        <button onClick={() => {
          navigate('/')
        }}>메인화면으로</button>
      </div>
    </div>
  )
}

export default GameResult