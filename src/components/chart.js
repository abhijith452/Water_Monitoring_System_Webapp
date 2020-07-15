import React from 'react';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './scss/chart.scss';
import io from 'socket.io-client';

// Making socket connection with the server

const socket = io('http://localhost:5000');

function ApexChart() {

 // Setting up the states



  const [dataReact, setData] = useState([
    
  ]);
  const [Pressure, setPressure] = useState([]);
  const [Ph, setPh] = useState([]);
  const [Flowrate, setFlowrate] = useState([]);
  const [deviceName, setDevice] = useState([]);

  // Getting the values

  useEffect(() => {
    socket.on('data1', res => {
      setData(currentData => [...currentData, res]);
      setPressure( res.Pressure);
      setPh(res.Ph);
      setFlowrate(res.Flowrate);
      setDevice(res.DeviceId);
    });
  }, []);

// Removing the 10th element form the data Array

  if (dataReact.length > 10) {
    dataReact.shift();
  }

  // Configuration of the chart

  const lineChart = (
    dataReact[0] ? (
      <Line
        height={120}
        className="chart__container__chart"
        data={{
          labels: dataReact.map(({ date }) => date),
          datasets: [{
            data: dataReact.map((data) => data.Pressure),
            label: 'Pressure',
            borderColor: '#F16900',
            fill: true,
          }, {
            data: dataReact.map((data) => data.Ph),
            label: 'PH value',
            borderColor: 'yellow',

            fill: true,
          },
          {
            data: dataReact.map((data) => data.Flowrate),
            label: 'Flowrate',
            borderColor: '#00F1CA',

            fill: true,
          }
          ],
        }}
        options={{

          tooltips: {
            enabled: true,
            mode: 'x',
            intersect: true,
            position: 'average',
          },

          scales: {
            xAxes: [{
              type: 'time',
              distribution: 'series',
              color: 'white',
              ticks: {
                fontColor: 'white',
              },
              gridLines: {
                display: false,
                color: "#FFFFFF"
              },
            }],
            yAxes: [{

              ticks: {
                fontColor: 'white',
              },
              gridLines: {
                display: false,
                color: "#FFFFFF"
              },
            }]
          },
          legend: {
            fillStyle: 'red',
            labels: {
              display: true,
              fontColor: 'white',
              defaultFontFamily: 'Opensans'
            }
          }
        }}
      />
    ) : 'loading...'
  );
  function colorChange(parameter,min,max) {
    if (parameter < min) {
     return {
        color: 'red'
      }
    }
    else if(parameter>max){
      return {
        color: 'red'
      }
    }
    else {
     return {
        color: 'rgb(105, 255, 45)'
      }
    }
  }
  return (
    <div className="chart">

      <div className="chart__container">
        <div>
        <h2 className="chart__container__title">Dashboard</h2>
        <div className="chart__container__parameters">
          <p className="chart__container__parameters__value">Devices connected : <span >1</span></p>
          <p className="chart__container__parameters__value">Pressure : <span style={colorChange(Pressure,2.5)}>{Pressure} pa</span></p>
          <p className="chart__container__parameters__value">Ph value : <span style={colorChange(Ph,5,8.5)}>{Ph}</span></p>
          <p className="chart__container__parameters__value">Flow rate : <span style={colorChange(Flowrate,6)}>{Flowrate}rpm</span></p>

        </div>
        <p className="chart__container__device">Device name : {deviceName}</p>
        </div>
        {lineChart}
      </div>

    </div>
  )

}



export default ApexChart;