import React from 'react'
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import './style.scss';
import { withStyles } from '@material-ui/core/styles';


const StyleSlider = withStyles({
  root: {
    color: '#1724ab',
    height: 8,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#1724ab',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const RangeFilter = ({filterData, tipo, minValue, maxValue, prefijo}) => {
 
  const [value, setValue] = React.useState([minValue, maxValue]);

  const handleChange = (event, newValue) => {
    filterData(tipo, newValue)
    setValue(newValue);
  };

  const handleInputChange1 = (event) => {
    filterData(tipo, [event.target.value === '' ? '' : Number(event.target.value),value[1]])
    setValue([event.target.value === '' ? '' : Number(event.target.value),value[1]]);
  };

  const handleInputChange2 = (event) => {
    filterData(tipo, [value[0],event.target.value === '' ? '' : Number(event.target.value)])
    setValue([value[0],event.target.value === '' ? '' : Number(event.target.value)]);
  };



    return (
      <div className="block">
        {tipo === 'Capacity' ? (
          <div className="flex justify-between">
            <div>
              <img className="m-auto mt-4" src="/assets/capacity/1 bullet.png"/>
            </div>
            <div>
              <img className="m-auto" src="/assets/capacity/10 bullets.png"/>
            </div>
          </div>
        ) : ''}
        <div> 
          <StyleSlider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={minValue}
            max={maxValue}
          />
        </div>
        
        <div className="flex justify-between">
          <div>
            <Input
              className="border-solid border border-blue input-size"
              value={value[0]}
              onChange={handleInputChange1}
              inputProps={{
                step: 10,
                min: minValue,
                max: maxValue,
                type: 'number',
              }}
              startAdornment={prefijo}
            />
          </div>
        <div>
          <Input
              className="border-solid border border-blue input-size"
              value={value[1]}
              onChange={handleInputChange2}
              inputProps={{
                step: 10,
                min: minValue,
                max: maxValue,
                type: 'number'
              }}
              startAdornment={prefijo}
            />
          </div>
        </div>
      </div>
    )
 
}

export default RangeFilter