import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeDiff } from '../redux/diff';
import { Button } from 'react-bootstrap';
import './Difficulty.css'

function Difficulty() {
  const diff = useSelector(state => state.diff)
  const dispatch = useDispatch()
  const [radioValue, setRadioValue] = useState(diff);


  const radios = [
    { name: '쉬움', value: '0' },
    { name: '어려움', value: '1' },
  ];

  return (
    <div className='diff-bg'>
      <div className='diff-container'>
        <h1>난이도를<br className="diff-br"/> 설정해주세요</h1>
        <ButtonGroup className="mb-2">
          {radios.map((radio, idx) => (
            <ToggleButton
              className='diff-toggle'
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <br />
        <Button className='diff-button' onClick={() => {
          dispatch(changeDiff(radioValue))
          alert('적용되었습니다')
        }}>적용</Button>
      </div>
    </div>
  )
}

export default Difficulty