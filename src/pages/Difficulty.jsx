import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeDiff } from '../redux/diff';
import { Button } from 'react-bootstrap';

function Difficulty(){
  const diff = useSelector(state=>state.diff)
  const dispatch = useDispatch()
  const [radioValue, setRadioValue] = useState(diff);
  

  const radios = [
    { name: '쉬움', value: '0' },
    { name: '어려움', value: '1' },
  ];

  return(
    <>
      <p>난이도를 설정해주세요</p>
      <ButtonGroup className="mb-2">
        {radios.map((radio, idx) => (
          <ToggleButton
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
      <br/>
      <Button onClick={()=>{
        dispatch(changeDiff(radioValue))
      }}>적용</Button>
    </>
  )
}

export default Difficulty