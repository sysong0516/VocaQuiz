import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";

function MainPage(){
  const navigate = useNavigate();
  const diff = useSelector(state=>state.diff)
  return(
    <>
      <p>hello Main!</p>
      <button onClick={()=>navigate('/game')}>GameStart~</button>
      <p>현재 난이도는 {diff.count==1?'어려움':'쉬움'}</p>
    </>
  )
}

export default MainPage