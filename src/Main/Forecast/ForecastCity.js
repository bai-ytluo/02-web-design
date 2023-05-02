import React, { useEffect, useState } from 'react'; 
import { get } from '../../Utils/Requests'; 
import TempChart from './TempChart';

const apiKey = 'b9fc1ce996c33aaf1e64a9f76de62ce6'; 

const ForecastCity = (props) => {
    const cityMap = new Map();
    cityMap.set('Chicago', { lat:'41.8755616', lon:'-87.6244212' } ); 
    cityMap.set('London', { lat:'51.5073219', lon:'-0.1276474' } ); 
    cityMap.set('Tokyo', { lat:'35.6828387', lon:'139.7594549' } ); 
    let {lat,lon} = cityMap.get(props.city); 
    const url = `/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`; 

    const [timeArray, setTimeArray] = useState(() => new Array(40));
    const [tempArray, setTempArray] = useState(() => new Array(40));
    const [weatherArray, setWeatherArray] = useState(() => new Array(40));
    useEffect(() => {
        get(url).then(res => {
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
    }, [props.city]);
    
    return (
        <TempChart time={timeArray} temp={tempArray} weather={weatherArray} />
    )
}; 

export default ForecastCity; 