import React from 'react';
import { Button, Form, Input, Space, } from 'antd'; 
import { useNavigate } from 'react-router-dom'; 

const LoginForm = (props) => {
    const navigate = useNavigate(); 
    const [form] = Form.useForm(); 
    const handleClear = () => {
        form.resetFields();
    }; 
    const handleLogin = () => {
        navigate('/login'); 
    }
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
        style: { maxWidth: 1600 },
        initialValues: { remember: true },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    return (
            <Form form={form} name="loginForm" {...layout}
                onFinish={props.onFinish}
                initialValues={{
                    username: '', password: '', age: ''
                }}
                autoComplete="off"
            >
                <Form.Item label="Username" name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}>
                    <Input placeholder='username'/>
                </Form.Item>
                <Form.Item label="Password" name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}>
                    <Input.Password placeholder='password' />
                </Form.Item>
                <Form.Item label="Age" name="age"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your age!',
                        },
                    ]}>
                    <Input type="number" min="1" max="99" placeholder='age' />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Space wrap>
                        <Button type="primary" htmlType="submit">Submit</Button>
                        <Button htmlType="button" onClick={handleClear}>Clear</Button>
                        <Button htmlType="button" onClick={handleLogin}>Login</Button>
                    </Space>
                </Form.Item>
            </Form>
    )
}; 

export default LoginForm; 
