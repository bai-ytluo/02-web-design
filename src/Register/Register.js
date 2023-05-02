import React from 'react'; 
import RegisterForm from './RegisterForm'; 

const Register = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
        let { username, password, age } = values; 
        let userData = { username:username, password:password, age:age }; 
        props.addUser(userData); 
    }; 
    return (
        <div className="Register">
            <RegisterForm onFinish={onFinish} />
        </div>
    )
}; 

export default Register; 