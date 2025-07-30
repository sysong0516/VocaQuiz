import './TopPlayer.css'
import TPCard from './TPCard'

function TopPlayerHorizontal() {
  const rank = JSON.parse(localStorage.getItem('rank'));
  const isNull = rank == null
  return (
    <div className='TopPlayerHorizontal'>
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

export default TopPlayerHorizontal
