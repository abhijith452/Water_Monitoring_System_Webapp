import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './scss/chart.scss';
function ApexChart(props){
  
 const series = [{
    name: props.name,
    data: props.x,
  },{
    name: props.name,
    data: props.x2,
  },{
    name: props.name,
    data: props.x3,
  }];
  const options = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: props.y
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };


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
   <ReactApexChart className ="chart__container__chart" options={options} series = {series} height ={450}type="area"/>
   </div>
 
 </div> 
)

}

 

export default ApexChart;