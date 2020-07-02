import React from 'react';

import './scss/home.scss';
import Chart from './chart';


function Home() {

 

  const data = [31, 40, 28, 51, 42, 109, 100];
  const data1 = [];
  const data2= [];
  const y = [
    "2020-07-01T17:13:00.000Z", 
    "2020-07-01T17:15:01.000Z",
    "2020-07-01T17:15:38.000Z", 
    "2020-07-01T17:15:48.000Z", 
    "2020-07-01T17:15:59.000Z", 
    "2020-07-01T17:16:09.000Z", 
    "2020-07-01T17:17:44.000Z"]
  return (
    <div className="home">

       <div className ="cards">
       <Chart name="pressure"/>
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