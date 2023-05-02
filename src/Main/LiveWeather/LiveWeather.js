import React from 'react'; 
import { Table } from 'antd'; 
import { get } from '../../Utils/Requests';

const apiKey = 'b9fc1ce996c33aaf1e64a9f76de62ce6'; 

class LiveWeather extends React.Component{
    constructor (props) {
        super(); 
        this.state = {
            Location: [
                {lat:'41.8755616', lon:'-87.6244212' }, // Chicago
                {lat:'51.5073219', lon:'-0.1276474' },  // London
                {lat:'35.6828387', lon:'139.7594549' }, // Tokyo
            ], 
            Details: [
                {city:'a', weather:'a', temperature:'a', humidity:'a'}, 
                {city:'b', weather:'b', temperature:'b', humidity:'b'}, 
                {city:'c', weather:'c', temperature:'c', humidity:'c'}, 
            ]
        }
    }; 
    componentDidMount() {
        this.updateDetails(); 
    }
    updateDetails = () => {
        const { Location } = this.state;
        Location.forEach(({ lat, lon }, i) => {
            const url = `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
            get(url).then((res) => {
                const { name, weather, main } = res.data;
                const newDetails = [...this.state.Details];
                newDetails[i] = {
                    city: name,
                    weather: weather[0].main,
                    temperature: main.temp,
                    humidity: main.humidity,
                };
                this.setState({ Details: newDetails });
            }).catch((error) => {
                console.error(error);
            });
        }); 
    }; 
    render() {
        const columns = [
            {
                title: 'City',
                dataIndex: 'city',
                key: 'city',
            },
            {
                title: 'Weather',
                dataIndex: 'weather',
                key: 'weather',
            },
            {
                title: 'Temperature',
                dataIndex: 'temperature',
                key: 'temperature', 
                render: (value) => `${value} \u00B0C`, 
            },
            {
                title: 'Humidity',
                dataIndex: 'humidity',
                key: 'humidity',
                render: (value) => `${value} %`,
            },
        ]; 
        return (
            <div className="Users">
                <h1 style={{color:'blue'}}>Current Temperature</h1>
                <Table columns={columns} dataSource={this.state.Details} /> 
            </div>
        )
    }
}

export default LiveWeather; 
