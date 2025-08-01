import { useSelector } from "react-redux"
import quiz from "../../highschool_english_1000.json"
import quiz_rev from "../../highschool_english_reverse.json"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Game.css'

let numbers;
let shuffled;

const quizArray = [];

function shuffle(diff) {
  if (diff) {
    quiz.push(...quiz_rev);
  }
  numbers = Array.from({ length: quiz.length }, (_, i) => i);
  shuffled = numbers.sort(() => Math.random() - 0.5);

  shuffled.map((num, i) => {
    quizArray[i + 1] = quiz[num]
  })
}

shuffle(false);

function Game({ name, score, setScore }) {

  const diff = useSelector(state => state.diff);

  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const [lifePoint, setLifePoint] = useState(diff.count == 0 ? 6 : 4);

  const [addScore, setAddScore] = useState(diff.count == 0 ? 10 : 15);

  const limit = diff.count == 0 ? 6 : 4

  function chk(choice) {
    if (quizArray[index].choices[choice].correct) {
      setScore(score + addScore)
      setTimeLeft(limit)
      alert('정답')
    }
    else {
      alert('오답')
      setTimeLeft(limit)
      setLifePoint(lifePoint - 1)
    }
    setIndex(index + 1)
    if (index == quiz.length) {
      navigate('/gameResult')
    }
  }

  function heart() {
    const h = [];
    for (let i = 0; i < lifePoint; i++) {
      h.push(1);
    }
    return h;
  }

  useEffect(() => {
    if (lifePoint == 0) {
      let Rank = localStorage.getItem('rank');
      let userResult = [{ rank: 1, name: name, score: score, time: new Date().toLocaleTimeString() }];
      if (Rank != null) {
        Rank = JSON.parse(Rank);
        Rank.push(userResult[0])
        Rank.sort((a, b) => b.score - a.score)
        Rank.map((data, i) => {
          data.rank = i + 1;
        })
        localStorage.setItem('rank', JSON.stringify(Rank));
      }
      else {
        localStorage.setItem('rank', JSON.stringify(userResult));
      }
      navigate('/gameResult')
    }
  }, [index])

  const [timeLeft, setTimeLeft] = useState(limit);
  useEffect(() => {
    if (diff.count != 0) {
      shuffle(true)
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    // Clean-up 함수 (컴포넌트 언마운트 시 타이머 해제 및 점수초기화)
    return () => {
      setScore(0);
      clearInterval(timer);
    }
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(limit)
      setIndex(index + 1)
      setLifePoint(lifePoint - 1)
    }
  }, [timeLeft])

  if (index == 0) {
    return (
      <>
        <div className="game-bg">
          <div className="game-container">
            <h3>잠시후 퀴즈가 시작됩니다</h3>
            <h4>{timeLeft}</h4>
          </div>
        </div>
      </>
    )
  }

  if (lifePoint == 0) {
    return (
      <div className="game-bg">
        <div className="game-container">
          <h4>종료되었습니다.</h4>
        </div>
      </div>
    )
  }


  return (
    <div className="game-bg">
      <div className="game-container">
        <div>
          <h4 className="quiz">{quizArray[index].question}</h4>
          {quizArray[index].choices.map((choice, i) => {
            return (
              <button key={i} onClick={() => { chk(i) }}>{quizArray[index].choices[i].korean ? quizArray[index].choices[i].korean : quizArray[index].choices[i].english}</button>
            )
          })}
        </div>
        <br />
        <div className="heart-container">
          {
            heart().map((data, i) => {
              return (
                <img className="heart" src="/img/heart.png" key={i} />
              )
            })
          }
        </div>
        <h4>남은 시간: {timeLeft}초</h4>
        <p>Score : {score}</p>
        <p>Level : {diff.count == 1 ? '어려움' : '쉬움'}</p>
      </div>
    </div>
  )
}

export default Game