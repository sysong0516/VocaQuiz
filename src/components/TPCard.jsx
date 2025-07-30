import Card from 'react-bootstrap/Card';
import './TopPlayer.css'

function TPCard({rankData}) {
  return (
    <Card className='TPCard' style={{ width: '8rem' }}>
      <Card.Body>
        <Card.Title>{rankData.rank}등</Card.Title>
        <Card.Subtitle className="TpTime">{rankData.time}</Card.Subtitle>
        <Card.Text className="TpData">
          <span>{rankData.name}<br className='Tpbr'/></span>
          {rankData.score}점
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TPCard;