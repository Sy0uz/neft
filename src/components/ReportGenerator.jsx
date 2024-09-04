import jsPDF from 'jspdf';
import React, { useEffect } from 'react'

const ReportGenerator = ({badSensorsList}) => {

    const generatePdf = () => {
        const doc = new jsPDF();
        doc.setFont('Helvetica');
        doc.setFontSize(10);

        for (let i = 0; i < badSensorsList.length; i++) {
            let text = `${badSensorsList[i].sensor.machineName} - ${badSensorsList[i].reqIntervention ? "Operator intervention required" : badSensorsList[i].emergency ? "Possible emergency" : ""} - Time: ${badSensorsList[i].timestamp}`

            doc.text(text, 10, 10 + i * 8);
        }

        doc.save('report.pdf');
    };

    return (
        <div className="reportButton">
            <button onClick={generatePdf}>Сгенерировать отчёт</button>
        </div>
    )
}

export default ReportGenerator