import './TopPlayer.css'
import TPCard from './TPCard'

function TopPlayer() {
  const rank = JSON.parse(localStorage.getItem('rank'));
  const isNull = rank == null
  return (
    <div className='TopPlayer'>
      {
        isNull ? <p></p> :
          rank.slice(0, 3).map((data, i) => {
            return (
              <TPCard rankData={data} key={i}/>
            )
          })
      }
    </div>
  )
}

export default TopPlayer