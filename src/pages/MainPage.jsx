import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import './MainPage.css'

function MainPage({ setScore }) {
  const navigate = useNavigate();
  const diff = useSelector(state => state.diff)
  return (
    <div className="main-container">
      <p>준비되었다면<br />바로 누르세요</p>
      <button onClick={() => navigate('/Name')}>GameStart</button>
      <p>Level : {diff.count == 1 ? '어려움' : '쉬움'}</p>

      <div className="sub-container">
        <img src='/img/sub1.png'></img>
        <div className="textField">
          <p>영단어 퀴즈를 풀며 단어를 외워보세요</p>
        </div>
      </div>
      <div className="sub-container">
        <img src='/img/sub2.png'></img>
        <div className="textField">
          <p>최대한 많은 문제를 풀며 <br />점수를 올려보세요. <br />쉬움 모드는 문제당 10점, 어려움 모드는 문제당 15점이 상승합니다.</p>
        </div>
      </div>
      <div className="sub-container">
        <img src='/img/sub3.png'></img>
        <div className="textField">
          <p>어려움 모드는 <br />더 적은 체력과 제한시간이 주어지고 한글영어가 뒤바뀐 문제가 나타납니다.</p>
        </div>
      </div>
      <div className="sub-container">
        <img src='/img/sub4.png'></img>
        <div className="textField">
          <p>지금 바로 1등에 도전하세요<br /></p>
          <button onClick={() => navigate('/Name')}>도전!</button>
        </div>
      </div>
    </div>
  )
}

export default MainPage