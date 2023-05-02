import React, {useState} from 'react'; 
import { Route, Routes, useNavigate } from "react-router-dom"; 
import { notification } from 'antd'; 
import Login from './Login/Login';
import Register from './Register/Register';
import Main from './Main/Main'; 
import Home from './Main/Home/Home'; 
import Users from './Main/Users/Users'; 
import LiveWeather from './Main/LiveWeather/LiveWeather';
import LiveSearch from './Main/LiveWeather/LiveSearch'; 
import ForecastCity from './Main/Forecast/ForecastCity'; 
import ForecastSearch from './Main/Forecast/ForecastSearch';

const AppRoutes = () => {
    const [userMap, setUserMap] = useState(() => {
      const userMap = new Map();
      userMap.set('admin', { id:0, age:'11', password:"admin" } ); 
      userMap.set('user1', { id:1, age:'22', password:"user1" } ); 
      userMap.set('user2', { id:2, age:'33', password:"user2" } ); 
      return userMap;
    });
    const [newId, setNewId] = useState(3);
    const navigate = useNavigate(); 
    const addUser = (userData) => {
      const key = userData.username; 
      const value = { id: newId, age: userData.age, password: userData.password }; 
      if (userMap.has(key)) {
        openUserNotification(); 
      } else {
        setNewId(prevNewId => prevNewId + 1); 
        userMap.set(key, value);
        setUserMap(new Map(userMap)); // create a new Map object to trigger a state update
        navigate('/login'); 
      }
    } 
    const delUser = (username) => {
      console.log(userMap, username); 
      userMap.delete(username); 
      setUserMap(new Map(userMap)); // create a new Map object to trigger a state update
    }
    const openUserNotification = () => {
      notification.open({
        message: 'Username Already Exists. ',
        duration: 2,
        style: { width: 400 }
      }); 
    }
    return (
        <Routes >
          <Route exact path="/" element={<Login userMap={userMap} />} />
          <Route path="/login" element={<Login userMap={userMap} />} />
          <Route path="/register" element={<Register addUser={addUser} />} />
          <Route path="/main" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="users" element={<Users userMap={userMap} delUser={delUser} />} />
            <Route path="live_search" element={<LiveSearch />} />
            <Route path="live_weather" element={<LiveWeather />} />
            <Route path="forecast_search" element={<ForecastSearch />} />
            <Route path="forecast_chicago" element={<ForecastCity city='Chicago' />} />
            <Route path="forecast_london" element={<ForecastCity city='London' />} />
            <Route path="forecast_tokyo" element={<ForecastCity city='Tokyo' />} />
          </Route>
        </Routes>
    )
}; 

export default AppRoutes; 