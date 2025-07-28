import { useNavigate } from "react-router-dom"

function GameResult({ name, score }) {
  const navigate = useNavigate()
  return (
    <div>
      <p>Check your Result</p>
      <p>{name}님의 점수는 {score}점~</p>
      <button onClick={()=>{
        navigate('/')
      }}>메인화면으로</button>
    </div>
  )
}

export default GameResult