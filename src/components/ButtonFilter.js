import React, {useEffect } from 'react'
import ButtonImg from './ButtonImg';
import './style.scss';

const ButtonFilter = ({arrayData, filterData, info, infoButton , size}) => {

  useEffect(() => {
  }, [arrayData]); 

  const markButton = (infoButton,event) => {
    filterData(info, infoButton.text);
  };

    return (
      <div>
      {size === 4 ? (
      <div className="grid grid-cols-4">
        {infoButton.map((infoB, i)=>{
          return(
            <button  key={i} className="filter-button" onClick={(e) => markButton(infoB, e)}>
              <div style={{backgroundColor: arrayData[info].includes(infoB['text']) ? '#C7E1FF' : 'white'}} className="border-solid border border-blue" ><ButtonImg img={infoB.img} text={infoB.text}></ButtonImg></div> 
            </button>
          )
        })}
      </div>
      ):(
      <div className="grid grid-cols-6">
        {infoButton.map((infoB, i)=>{
          return(
            <button key={i} className="filter-button" onClick={(e) => markButton(infoB,i, e)}>
              <div style={{backgroundColor: arrayData[info].includes(infoB['text']) ? '#C7E1FF' : 'white'}} className="border-solid border border-blue"><ButtonImg img={infoB.img} text={infoB.text}></ButtonImg></div> 
            </button>
          )
        })}
      </div>
    )}
    </div>
    )
  }

export default ButtonFilter