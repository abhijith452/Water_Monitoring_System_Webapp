import React from 'react';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Line, Bar } from 'react-chartjs-2';
import './scss/chart.scss';


import io from 'socket.io-client';
const socket = io('http://localhost:5000');

function ApexChart(props){

  const [dataReact, setData] = useState([]);

  useEffect(() => {
    socket.on('data1', res => {
      setData(currentData => [...currentData, res]);
     
     
    });
  }, []);
  console.log(dataReact.MessageDate)
if(dataReact.length > 10)
{
  dataReact.shift();

}
  
const lineChart = (
  dataReact[0] ? (
    <Line
      data={{
        labels: dataReact.map(({ date }) => date),
        datasets: [{
          data: dataReact.map((data) => data.temperature),
          label: 'Pressure',
          borderColor: 'green',
          fill: true,
        }, {
          data: dataReact.map((data) => data.Humidity),
          label: 'PH value',
          borderColor: 'yellow',
         
          fill: true,
        },
        ],
      }}
      options = {{
        scales: {
            xAxes: [{
                type: 'time',
                
            }]
        }}}
    />
  ) : 'loading...'
);

return(
 <div className ="chart">
 
  <div className="chart__container">
  <h2 className="chart__container__title">Dashboard</h2>
   <div className="chart__container__parameters">
     <p className="chart__container__parameters__value">Devices connected : <span>250rpm</span></p>
     <p className="chart__container__parameters__value">Pressure : <span>250rpm</span></p>
     <p className="chart__container__parameters__value">Ph value : <span>250rpm</span></p>
     <p className="chart__container__parameters__value">Flow rate : <span>250rpm</span></p>

   </div>
   <p className="chart__container__device">Device name : Raspbery pie at kottayam</p>
   {lineChart}
   </div>
 
 </div> 
)

}

 

export default ApexChart;