import {
    UserOutlined, 
    CloudOutlined, 
    ClockCircleOutlined
} from '@ant-design/icons'; 
import { Link, } from 'react-router-dom'; 

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(<Link to={'home'} > Home </Link>, '1', <UserOutlined />),
    getItem(<Link to={'users'} > Users </Link>, '2', <UserOutlined />),
    getItem('Live Weather', 'sub1', <CloudOutlined />, [
        getItem(<Link to={'live_search'} > Coordinate Search </Link>, '3'), 
        getItem(<Link to={'live_weather'} > Major Cities </Link>, '4'),
    ]),
    getItem('Weather Forecast', 'sub2', <ClockCircleOutlined />, [
        getItem(<Link to={'forecast_search'} > Coordinate Search </Link>, '7'),
        getItem('Major Cities', 'sub3', null, [
            getItem(<Link to={'forecast_chicago'} > Chicago </Link>, '8'), 
            getItem(<Link to={'forecast_london'} > London </Link>, '9'), 
            getItem(<Link to={'forecast_tokyo'} > Tokyo </Link>, '10'), 
        ]),
    ]),
]; 

export default items; 


