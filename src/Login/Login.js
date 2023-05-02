import React from 'react';
import { notification, } from 'antd'; 
import { useNavigate } from 'react-router-dom'; 
import LoginForm from './LoginForm';
import { post } from '../Utils/Requests';

const Login = (props) => {
    const navigate = useNavigate(); 
    const userMap = props.userMap; 
    const onFinish = (values) => {
        console.log('Success:', values); 
        console.log(userMap); 
        let { username, password } = values; 
        /* post('/api/user/login', {account:username, password:password} ).
        then(res=>{
            console.log(res); 
            let {code} = res.data; 
            if(code==='20000'){
                sessionStorage.setItem('username',username); 
                navigate('/main');
            }
            else {
                console.log('Login Info Mistake!'); 
                openNotification(); 
            }
        }).catch(error=>{
            openNotification(); 
        });  */
        if( userMap.has(username) ){
            if( userMap.get(username).password === password ){
                console.log('Login Done!');
                sessionStorage.setItem('username',username); 
                navigate('/main');
            }
            else { openNotification(userMap.get(username).password); }
        }
        else { openUserNotification(); }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        console.log('Login Format Wrong!'); 
        openFormatNotification();
    };
    const openUserNotification = () => {
        notification.open({
            message: 'Username Does Not Exist. ',
            duration: 2,
            style: { width: 400 }
        }); 
    }; 
    const openFormatNotification = () => {
        notification.open({
            message: 'Login Info Did Not Go Through. ',
            duration: 2,
            style: { width: 400 }
        }); 
    }; 
    const openNotification = (pw) => {
        notification.open({
            message: 'Password is: ',
            description: pw,
            duration: 2,
            style: {
                width: 400
            }
        });
    };

    return (
        <div className="Login">
            <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </div>
    )
}; 

export default Login; 
