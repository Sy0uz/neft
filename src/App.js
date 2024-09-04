import React, { useEffect, useState } from 'react'
import checkData from './utils/checkData';
import SensorList from './components/SensorList';
import Header from './components/Header';
import './index.css'
import checkDataError from './utils/checkDataError';
import ReportGenerator from './components/ReportGenerator';
import MyModal from './components/MyModal';

const App = () => {

  const [data, setData] = useState([])
  const [badSensorsList, setBadSensorsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    checkData(setData);
  }, []);

  useEffect(() => {
    sensorTester();
  }, [data])

  const sensorTester = () => {
    const BadSensors = [];
    for (const sensor of data) {
      const res = checkDataError(sensor);
      if (res.reqIntervention || res.emergency) {
        let sensorWarning = {sensor: sensor, reqIntervention: res.reqIntervention, emergency: res.emergency, timestamp: new Date().toLocaleTimeString()};
        if (res.reqIntervention) {
          BadSensors.push(sensor.machineName);
        }
        setBadSensorsList(prevListData => [...prevListData, sensorWarning]);
      }
    }
    if (BadSensors.length > 0) {
      setShowModal(true);
      setModalText(BadSensors.join(", "));
    }
  }

  return (
    <>
      <Header/>
      <MyModal showModal={showModal} setShowModal={setShowModal} modalText={modalText}/>
      <div>
        {
          data
          ? 
          <SensorList list={data}/>
          : <div>Loading</div>
        }
      </div>
      <ReportGenerator badSensorsList={badSensorsList}/>
    </>
  )
}

export default App;
