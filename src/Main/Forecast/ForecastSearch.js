import React, { useState } from 'react'; 
import { get } from '../../Utils/Requests'; 
import TempChart from './TempChart'; 
import SearchForm from './SearchForm';

const apiKey = 'b9fc1ce996c33aaf1e64a9f76de62ce6'; 

const ForecastSearch = () => {
    const [timeArray, setTimeArray] = useState(() => new Array(40)); 
    const [tempArray, setTempArray] = useState(() => new Array(40)); 
    const [weatherArray, setWeatherArray] = useState(() => new Array(40));
    const onFinish = (values) => {
        let { lat, lon } = values; 
        const url = `/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`; 
        get(url).then(res => {
            console.log(res); 
            let list = res.data.list; 
            let newTimeArray = [];
            let newTempArray = [];
            let newWeatherArray = []; 
            for (let i = 0; i < 40; i += 1) {
                newTimeArray.push(list[i].dt_txt);
                newTempArray.push(list[i].main.temp);
                newWeatherArray.push(list[i].weather[0].icon);
            }
            setTimeArray(newTimeArray); 
            setTempArray(newTempArray); 
            setWeatherArray(newWeatherArray); 
        })
        .catch(error => {
            console.error(error);
        }); 
    }
    
    return (
        <div>
            <SearchForm onFinish={onFinish} />
            <TempChart time={timeArray} temp={tempArray} weather={weatherArray} />
        </div>
    )
}; 

export default ForecastSearch; 