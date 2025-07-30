import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import './MainPage.css'

function MainPage({setScore}){
  const navigate = useNavigate();
  const diff = useSelector(state=>state.diff)
  return(
    <div className="main-container">
      <p>준비되었다면<br/>바로 누르세요</p>
      <button onClick={()=>navigate('/Name')}>GameStart</button>
      <p>Level : {diff.count==1?'어려움':'쉬움'}</p>

      <div className="sub-container">
        <img src='/img/testImage.jpg'></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta a ipsa officia repudiandae provident nobis laborum incidunt error, eligendi assumenda nostrum laudantium consectetur possimus voluptate dolor inventore ipsum! Magni.</p>
      </div>
      <div className="sub-container">
        <img src='/img/testImage.jpg'></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius, architecto non sequi, hic blanditiis ipsa reiciendis autem et laborum quibusdam aspernatur ullam molestiae inventore magni sint dolorem, minus tenetur!</p>
      </div>
    </div>
  )
}

export default MainPage