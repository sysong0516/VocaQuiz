import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './Name.css'

function Name({ setName }) {
  const navigate = useNavigate();
  const rank = JSON.parse(localStorage.getItem('rank'));
  let userName;
  return (
    <div className='name-container'>
      <div className='name-feature'>
        <Form.Label htmlFor="inputPassword5">닉네임을 입력해주세요</Form.Label>
        <Form.Control
          autoComplete="off"
          placeholder='1~5글자를 입력해주세요'
          className='nick_input'
          type="text"
          id="nickName"
          aria-describedby="passwordHelpBlock"
          onChange={(e) => {
            userName = e.target.value;
          }}
        />
        <Form.Text id="nickName block" muted>
        </Form.Text>
        <br />
        <button onClick={() => {
          if (rank && rank.some(data => data.name === userName)) {
            alert('이미 존재하는 닉네임입니다');
            document.getElementById('nickName').value = '';
          }
          else if (!userName || userName.trim() === '') {
            alert('닉네임을 입력하지 않았습니다');
          }
          else if(userName.length>5){
            alert('글자 수가 초과되었습니다.');
            document.getElementById('nickName').value = '';
          }
          else {
            setName(userName);
            navigate('/game');
          }
        }}>start</button>
      </div>

    </div>
  );
}

export default Name;