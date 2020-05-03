import React from 'react'
import Button from '@material-ui/core/Button';
import './style.scss';

const ButtonComponent = ({cleanData, arrayData, label, background, color}) => {
  
  let styles = {
    color: color,
    backgroundColor: background,
    border: "solid", 
    borderColor: '#1256bc',
    borderWidth: '1px'
  };

  const searchData =()=>{
    if(label === 'BUSCAR'){
      console.log("Estos son los datos del filtro:",arrayData)
    }else{
      cleanData();
      console.log("El filtro esta limpio")
    }
    
  }

    return (
      <div className="m-4">
        <Button onClick={(e) => searchData()} className="button-style" variant="contained" style={styles}>
          {label}
        </Button>
      </div>
    )
  
}

export default ButtonComponent