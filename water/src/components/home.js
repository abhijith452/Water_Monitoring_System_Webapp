import React from 'react';
import './scss/home.scss';
import Chart from './chart';

function Home() {
  return (
    <div className="home">
       hello
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
    <Chart />
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