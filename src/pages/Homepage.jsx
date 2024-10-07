import React from "react";
import { Chart as ChartJS} from "chart.js/auto";
import { Bar, Line } from 'react-chartjs-2';
import "../components/css/HomePage.css"
import TopStock from "../components/topStocks";
import Footer from "../components/Footer";



const HomePage = () => {
  return (

    <div className="HomePage">
        <h1 className="shbztext"> Welcome to Homepage</h1>
     
      <TopStock/>
    
    </div>
  )
}

export default HomePage