import React, { useEffect, useState } from 'react'
import s from './Sensor.module.css'
import checkDataError from '../utils/checkDataError';

/*
        "id":1,
        "temp":10,
        "pressure":5,
        "rspeed":20,
        "voltage":5,
        "amperage":5
*/

const Sensor = ({data}) => {

  const [dataCorrectState, setDataCorrectState] = useState(null);
  useEffect(() => {
    setDataCorrectState(checkDataError(data));
  }, [data])
  

  return (
      dataCorrectState
      ?
      <div>
        <div className={s.body}>
          <h3>{data.machineName}</h3>
          <div>Температура: <span>{data.temp} °C</span></div>
          <div>Давление: <span>{data.pressure} Pa</span></div>
          <div>Скорость генератора: <span>{data.rspeed} Об/мин</span></div>
          <div>Напряжение: <span>{data.voltage} В</span></div>
          <div>Сила тока: <span>{data.amperage} А</span></div>
        </div>
        <div>
          {
            !dataCorrectState.emergency
              ?
              <div className={s.correct}>Угроз не обнаружено</div>
              :
              <div className={s.error}>Возможна аварийная ситуация!</div>
          }
        </div>
        <div>
          {
            !dataCorrectState.reqIntervention
              ?
              <div className={[s.correct, s.bottom].join(' ')}>Угроз не обнаружено</div>
              :
              <div className={[s.error, s.bottom].join(' ')}>Требуется вмешательство оператора!</div>
          }
        </div>
      </div>
    :
    <div>
      Загрузка...
    </div>
  )
}

export default Sensor