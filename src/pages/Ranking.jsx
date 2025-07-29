import Table from 'react-bootstrap/Table';
import './Ranking.css'

function Ranking() {
  const rank = JSON.parse(localStorage.getItem('rank'));
  const isNull = rank == null
  return (
    <div className='rank-container'>
      <p>Ranking</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Time</th>
          </tr>
        </thead>
        {isNull ? <tbody></tbody> :
          <tbody>
            {
              rank.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.rank}</td>
                    <td>{data.name}</td>
                    <td>{data.score}</td>
                    <td>{data.time}</td>
                  </tr>
                )
              })
            }
          </tbody>
        }
      </Table>
    </div>
  )
}

export default Ranking