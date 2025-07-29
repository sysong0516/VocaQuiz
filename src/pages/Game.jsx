import { useSelector } from "react-redux"
import quiz from "../../highschool_english_1000.json"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let randomSelection;
let numbers;
let shuffled;

const quizArray = [];
function shuffle() {
  numbers = Array.from({ length: 1000 }, (_, i) => i);
  shuffled = numbers.sort(() => Math.random() - 0.5);
  randomSelection = shuffled.slice(350, 355);
  console.log('난수생성 ' + randomSelection)
  randomSelection.map((num, i) => {
    quizArray[i + 1] = quiz[num]
  })
}

shuffle();

function Game({ name, score, setScore }) {

  const diff = useSelector(state => state.diff)

  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  function chk(choice) {
    if (quizArray[index].choices[choice].correct) {
      setScore(score + 10)
      alert('정답')
      setTimeLeft(5)
    }
    else {
      alert('오답')
      setTimeLeft(5)
    }
    setIndex(index + 1)
  }

  useEffect(() => {
    if (index == 6) {
      let Rank = localStorage.getItem('rank');
      let userResult=[{rank: 1, name:name, score:score, time:new Date().toLocaleTimeString()}];
      if(Rank!=null){
        Rank=JSON.parse(Rank);
        Rank.push(userResult[0])
        Rank.sort((a,b)=>b.score-a.score)
        Rank.map((data,i)=>{
          data.rank=i+1;
        })
        localStorage.setItem('rank', JSON.stringify(Rank));
      }
      else{
        localStorage.setItem('rank', JSON.stringify(userResult));
      }
      shuffle();
      navigate('/gameResult')
    }
  }, [index])

  const [timeLeft, setTimeLeft] = useState(5);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    // Clean-up 함수 (컴포넌트 언마운트 시 타이머 해제 및 점수초기화)
    return () =>{
      setScore(0);
      clearInterval(timer);
    } 
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(5)
      setIndex(index + 1)
    }
  }, [timeLeft])

  if (index == 0) {
    return (
      <>
        <h3>잠시후 퀴즈가 시작됩니다</h3>
      </>
    )
  }

  if (index == 6) {
    return (
      <>
        <h4>종료되었습니다.</h4>
      </>
    )
  }


  return (
    <>
      <div>
        <h3>{quizArray[index].question}</h3>
        <button onClick={() => { chk(0) }}>{quizArray[index].choices[0].korean}</button>
        <button onClick={() => { chk(1) }}>{quizArray[index].choices[1].korean}</button>
        <button onClick={() => { chk(2) }}>{quizArray[index].choices[2].korean}</button>
        <button onClick={() => { chk(3) }}>{quizArray[index].choices[3].korean}</button>
      </div>
      <br />
      <h4>남은 시간: {timeLeft}초</h4>
      <p>현재 점수는 {score}</p>
      <p>{name}님의 남은 문제는 {6 - index}</p>
      <p>현재 난이도는 {diff.count == 1 ? '어려움' : '쉬움'}</p>
    </>

  )
}

export default Game