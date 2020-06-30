import React from 'react';
import './scss/home.scss';
import Chart from './chart';

function Home() {

  const data = [31, 40, 28, 51, 42, 109, 100];
  const data1 = [32, 41, 29, 52, 45, 100, 120];
  const data2= [10, 46, 28, 40, 49, 111, 130];
  const y = [
    "2018-09-19T00:00:00.000Z", 
    "2018-09-19T01:30:00.000Z",
    "2018-09-19T02:30:00.000Z", 
    "2018-09-19T03:30:00.000Z", 
    "2018-09-19T04:30:00.000Z", 
    "2018-09-19T05:30:00.000Z", 
    "2018-09-19T06:30:00.000Z"]
  return (
    <div className="home">

       <div className ="cards">
       <Chart x ={data} x2 ={data1} x3 ={data2} y ={y} name="pressure"/>
      </div>
    </div>
  );
}

export default Home;




{/* 
<Card title = "Devices"
            value = "200rpm"
            
      />
       <Card title = "Pressure"
            value = "200"
            
      />
       <Card title = "Flowrate"
            value = "200"
           
      />
       <Card title = "Ph value"
            value = "200"
            
      />
     
    </div>
    <Chart x ={data} x2 ={data1} x3 ={data2} y ={y} name="pressure"/> */}