const checkDataError = (sensorData) => {
    const valueOffset = 10;
    const maxSaveData = {
        temp:280,
        pressure:300,
        rspeed:3600,
        voltage:420,
        amperage:600
    }

    let emergency = false; 
    let reqIntervention = false;

    if (sensorData.temp > maxSaveData.temp 
        || sensorData.pressure > maxSaveData.pressure 
        || sensorData.rspeed > maxSaveData.rspeed 
        || sensorData.voltage > maxSaveData.voltage 
        || sensorData.amperage > maxSaveData.amperage) {
        reqIntervention = true;
        emergency = true;
    }
    else if (sensorData.temp > maxSaveData.temp - valueOffset 
        || sensorData.pressure > maxSaveData.pressure - valueOffset 
        || sensorData.rspeed > maxSaveData.rspeed - valueOffset 
        || sensorData.voltage > maxSaveData.voltage - valueOffset 
        || sensorData.amperage > maxSaveData.amperage - valueOffset) {
            emergency = true;
            reqIntervention = false;
        }
    else {
        emergency = false;
        reqIntervention = false;
    }

    return {emergency: emergency, reqIntervention: reqIntervention};;
}

export default checkDataError;