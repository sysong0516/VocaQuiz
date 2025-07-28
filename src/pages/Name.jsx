import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Name({setName}) {
  const navigate = useNavigate();
  return (
    <>
      <Form.Label htmlFor="inputPassword5">닉네임을 입력해주세요</Form.Label>
      <Form.Control
        type="text"
        id="nickName"
        aria-describedby="passwordHelpBlock"
        onChange={(e)=>{
          setName(e.target.value)
        }}
      />
      <Form.Text id="nickName block" muted>
       
      </Form.Text>
      <br/>
      <button onClick={()=>{
        navigate('/game');
      }}>start</button>
    </>
  );
}

export default Name;