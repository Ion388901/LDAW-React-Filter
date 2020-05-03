import React from 'react'

const ButtonImg = props => {
  
    return (
      <div>
        <div className="m-1">
          <img className="m-auto" src={`/assets/${props.img}`}/>
          <p className="text-center">{props.text}</p>
        </div>
      </div>
    )

}

export default ButtonImg