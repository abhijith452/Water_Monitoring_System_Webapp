import React from 'react';
import './scss/home.scss';
import Chart from './chart';


function Home() {

  return (
    <div className="home">

       <div className ="cards">
       <Chart name="pressure"/>
      </div>
    </div>
  );
}

export default Home;




