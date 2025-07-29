import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Name({ setName }) {
  const navigate = useNavigate();
  const rank = JSON.parse(localStorage.getItem('rank'));
  let userName;
  return (
    <>
      <Form.Label htmlFor="inputPassword5">닉네임을 입력해주세요</Form.Label>
      <Form.Control
        type="text"
        id="nickName"
        aria-describedby="passwordHelpBlock"
        onChange={(e) => {
          userName=e.target.value;
        }}
      />
      <Form.Text id="nickName block" muted>

      </Form.Text>
      <br />
      <button onClick={() => {
        if (rank && rank.some(data => data.name === userName)) {
          alert('이미 존재하는 닉네임입니다');
          document.getElementById('nickName').value='';
        }
        else if(!userName||userName.trim() === ''){
          alert('닉네임을 입력하지 않았습니다');
        }
        else {
          setName(userName);
          navigate('/game');
        }
      }}>start</button>
    </>
  );
}

export default Name;