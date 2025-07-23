import { useSelector } from "react-redux"

function Game(y){
const diff = useSelector(state=>state.diff)
  return(
    <>
      <p>hello Game!</p>
      <p>현재 난이도는 {diff.count==1?'어려움':'쉬움'}</p>
    </>
    
  )
}

export default Game