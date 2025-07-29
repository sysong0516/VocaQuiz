import './TopPlayer.css'

function TopPlayer() {
  const rank = JSON.parse(localStorage.getItem('rank'));
  const isNull = rank == null
  return (
    <div className='TopPlayer'>
      {
        isNull ? <p></p> :
          rank.slice(0, 3).map((data, i) => {
            return (
              <div className='TPCard' key={i}>
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

export default TopPlayer