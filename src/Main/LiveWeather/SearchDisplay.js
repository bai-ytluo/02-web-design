import React from 'react'; 

const ResultDisplay = ({details}) => {
    return (
        <div style={{color:'blue'}} >
            <div> City : {details.city} </div>
            <div> Weather : {details.weather}, {details.weather_description} </div>
            <div> Temperature : {details.temp} &deg;C , feels like : {details.temp_feel} &deg;C , 
                    lowest at : {details.temp_min} &deg;C , highest at : {details.temp_max} &deg;C 
            </div>
            <div> Wind : {details.wind_speed} m/s at {details.wind_dir} degrees from the north </div>
            <div> Pressure : {details.pressure} hPa . 
                Humidity : {details.humidity} % . 
                Visibility : {details.visibility} m (maximum 10 km) . 
            </div>
        </div>
    )
}; 

export default ResultDisplay; 