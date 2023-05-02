import React, { useState } from 'react'; 
import { get } from '../../Utils/Requests'; 
import ResultDisplay from './SearchDisplay'; 
import SearchForm from './SearchForm';

const apiKey = 'b9fc1ce996c33aaf1e64a9f76de62ce6'; 

const LiveSearch = () => {
    const [details, setDetails] = useState(() => {
        const userMap = {
            city:'', 
            weather:'', weather_description:'', 
            temp:'', temp_feel:'', temp_min:'', temp_max:'', 
            wind_speed:'', wind_dir:'', cloud_percent:'', 
            pressure:'', humidity:'', visibility:'', 
        }; 
        return userMap;
      });
    const onFinish = (values) => { 
        let { lat, lon } = values; 
        const url = `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
        console.log('Success:', url); 
        get(url)
        .then(res => {
            console.log(res)
            let { name, weather, main, wind, clouds, visibility } = res.data; 
            updateDetails( name, weather, main, wind, clouds, visibility ); 
        })
        .catch(error => {
            console.error(error);
        }); 
    }
    const updateDetails = ( name, weather, main, wind, clouds, visibility ) => {
        setDetails(prevDetails => ({
            ...prevDetails,
            city: name, 
            weather: weather[0].main, weather_description: weather[0].description, 
            temp: main.temp, temp_feel: main.feels_like, temp_min: main.temp_min, temp_max: main.temp_max, 
            wind_speed: wind.speed, wind_dir: wind.deg, cloud_percent: clouds.all, 
            pressure: main.pressure, humidity: main.humidity, visibility: visibility, 
        })); 
    }; 
    return (
        <div>
            <SearchForm onFinish={onFinish} />
            <ResultDisplay details={details} />
        </div>
    )
}

export default LiveSearch; 
