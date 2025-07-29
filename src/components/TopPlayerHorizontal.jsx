import './TopPlayer.css'

function TopPlayerHorizontal() {
  const rank = JSON.parse(localStorage.getItem('rank'));
  const isNull = rank == null
  return (
    <div className='TopPlayerHorizontal'>
      {
        isNull ? <p></p> :
          rank.slice(0, 3).map((data, i) => {
            return (
              <div className='TPCardHorizontal' key={i}>
                <p>{i + 1}등</p>
                <p>{data.name}</p>
                <p>{data.score}점</p>
              </div>
            )
          })
      }
    </div>
  )
}

export default TopPlayerHorizontal
