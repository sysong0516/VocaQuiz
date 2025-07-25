import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Name({setName}) {
  const navigate = useNavigate();
  return (
    <>
      <Form.Label htmlFor="inputPassword5">Insert your Name</Form.Label>
      <Form.Control
        type="text"
        id="nickName"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>{
          setName(e.target.value)
        }}
      />
      <Form.Text id="nickName block" muted>
        Your Name must be 4~20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
      <br/>
      <button onClick={()=>{
        navigate('/game');
      }}>start</button>
    </>
  );
}

export default Name;