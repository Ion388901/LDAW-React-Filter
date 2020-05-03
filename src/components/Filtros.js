import React, {useState } from 'react'
import ButtonFilter from './ButtonFilter';
import RangeFilter from './RangeFilter'
import ButtonComponent from './Button';
import Button from '@material-ui/core/Button';
import './style.scss';

//Import data from JSON
import Data from '../service/Guns.json'

const Filtros = () => {
  const [action, setAction] = useState(Data.action);
  const [country, setCountry] = useState(Data.country);
  const [caliber, setCaliber] = useState(Data.caliber);
  const [firetype, setFiretype] = useState(Data.firetype);

  const [arrayData, setArrayData] = useState({ 
    country: [],
    caliber: [],
    action: [],
    firetype: [],
    capacity:[],
    price:[],
  });

  const filterData = (info, data) =>{
    let cArray = Object.assign([], arrayData);
    if(info === 'capacity' || info === 'price'){
      cArray[info] = []
    }
    cArray[info].push(data);
    setArrayData(cArray);
  }

  const cleanData = () =>{
    let cArray = { 
      country: [],
      caliber: [],
      action: [],
      firetype: [],
      capacity:[],
      price:[],
    }
    setArrayData(cArray);
  }
  

    return (
      <div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="mb-5">
              <span className="text-base title-bold">País</span>
              <span className="text-base about-button mb-2 ml-2">?</span>
              <ButtonFilter filterData={filterData} arrayData={arrayData} info={'country'} infoButton={country} size={6}></ButtonFilter>
            </div>
            
            <div className="mb-5">
              <span className="text-base title-bold">Calibre</span>
              <span className="text-base about-button mb-2 ml-2">?</span>
              <ButtonFilter filterData={filterData} arrayData={arrayData} info={'caliber'} infoButton={caliber} size={4}></ButtonFilter>
            </div>
            
            <div className="mb-5">
              <span className="text-base title-bold">Acción</span>
              <span className="text-base about-button mb-2 ml-2">?</span>
              <ButtonFilter filterData={filterData} arrayData={arrayData} info={'action'} infoButton={action} size={4}></ButtonFilter>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <span className="text-base title-bold">Tipo de acción</span>
              <span className="text-base about-button mb-2 ml-2">?</span>
              <ButtonFilter filterData={filterData} arrayData={arrayData} info={'firetype'} infoButton={firetype} size={4}></ButtonFilter>
            </div>

            <div className="mb-5">
              <span className="text-base title-bold">Capacidad</span>
              <span className="text-base about-button mb-2 ml-2">?</span>
              <RangeFilter filterData={filterData} info={'capacity'} minValue={1} maxValue={10} tipo={'capacity'}></RangeFilter>
            </div>

            <div className="mb-5">
              <span className="text-base title-bold">Precio</span>
              <RangeFilter filterData={filterData} info={'price'} prefijo={'$'} minValue={10000} maxValue={5000000} tipo={'price'}></RangeFilter>
            </div>
          </div>
        </div>

      <div className="button-container flex justify-center">
        <ButtonComponent arrayData={arrayData} label={'BUSCAR'} background={'#1724ab'}  color={'#ffffff'}></ButtonComponent>
        <ButtonComponent cleanData={cleanData} label={'LIMPIAR FILTROS'} background={'#ffffff'} color={'#1724ab'}></ButtonComponent>
      </div>

      </div>
    )
}

export default Filtros