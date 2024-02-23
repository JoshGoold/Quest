
import { BsCloudSun } from "react-icons/bs";
import ReactDOMServer from 'react-dom/server';
import {BrowserRouter, Routes, Route } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
function Navigation(props){

    
  const navigate = useNavigate();

  const handleButtonArt = () => {
    // Navigate to the desired route
    navigate('/art');
  };
  const handleButtonCarp = () => {
    // Navigate to the desired route
    navigate('/carpentry');
  };
  const handleButtonFinance = () => {
    // Navigate to the desired route
    navigate('/finance');
  };
  const handleButtonMusic = () => {
    // Navigate to the desired route
    navigate('/music');
  };
  const handleButtonProgram = () => {
    // Navigate to the desired route
    navigate('/programmer');
  };
  const handleButtonLearn = () => {
    // Navigate to the desired route
    navigate('/learn');
  };
  const handleButtonDesign = () => {
    // Navigate to the desired route
    navigate('/design');
  };
 
     // Define the API URL 
// const apiUrl =
// "http://api.weatherapi.com/v1/current.json?key=d60caba84cdd484c9a4215845241201&q=Toronto&aqi=no";

// // Get the HTML element
// const htmlElement = document.getElementById("weather");
// const location = "Toronto  "
// // Make a GET request
// function updateWeather(){ 
// fetch(apiUrl)
// .then((response) => {
//     if (!response.ok) {
//         throw new Error("Network response was not ok");
//     }
//     return response.json();
// })
// .then((data) => {
//     // Set the text content of the HTML element to the API data
//     const iconString = ReactDOMServer.renderToString(<BsCloudSun />)
//     htmlElement.innerHTML =location+ "  " + `${data.current.temp_c}°C`+ "   " +  iconString   ;
// })
// .catch((error) => {
//     console.error("Error:", error);
// }); 
// }
// setInterval(updateWeather, 10000);

// updateWeather();

    return(
        <div className="nav">
            
            <ul>
                {/* <li><span id="weather"></span></li> */}
                <li><button className="main-nav-button"onClick={props.linktoggle}>{props.toggle}</button></li>
                <li><button className="main-nav-button" onClick={handleButtonCarp}>Carpentry</button></li>
                <li><button className="main-nav-button" onClick={handleButtonArt}>Art</button></li>
                <li><button className="main-nav-button" onClick={handleButtonDesign}>Design</button></li>
                <li><button className="main-nav-button" onClick={handleButtonLearn}>Learn</button></li>
                <li><button className="main-nav-button"onClick={handleButtonFinance}>Finance</button></li>
                <li><button className="main-nav-button"onClick={handleButtonProgram}>Programming</button></li>
                <li><button className="main-nav-button"onClick={handleButtonMusic}>Music</button></li>
            </ul>
        </div>

    );
}
export default Navigation