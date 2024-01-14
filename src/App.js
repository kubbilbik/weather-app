//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import axios from "axios";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState();
  const getWearherData = async (lat , lon ) =>{
    const key = process.env.API_KEY;

    try{
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
      setWeather(data);
    }catch{
      alert("error fetching data");
    }
  };
 
    return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
