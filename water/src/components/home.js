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
    <Chart x ={data} x2 ={data1} x3 ={data2} y ={y} name="pressure"/>
    </div>
  );
}

export default Home;


function Card(props) {
    return (
      <div className="card">
         <h5 className="card__title">{props.title}</h5>
        <div className ="card__row">
             <h3 className="card__row__icon"><svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="arrowDownIconTitle" stroke="#2329D6" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#2329D6"> <title id="arrowDownIconTitle">Arrow Down</title> <path d="M6 15l6 6 6-6"/> <path d="M12 3v17"/> <path stroke-linecap="round" d="M12 21v-1"/> </svg></h3>
             <p className="card__row__value">{props.value}</p>
        </div>
    

      </div>
    );
  }