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
  
   <ReactApexChart className ="chart__container__chart" options={options} series = {series} type="area"/>
 
 </div> 
)

}

 

export default ApexChart;