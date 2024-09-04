import React from 'react'
import Sensor from './Sensor'
import s from './SensorList.module.css'

const SensorList = ({list}) => {
  return (
    <div className={s.sensorTable}>
        {list.map(sensor => <Sensor data={sensor} key={sensor.id}/>)}
    </div>
  )
}

export default SensorList