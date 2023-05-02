import React from 'react';
import { Button, Checkbox, Form, Input, Space, } from 'antd'; 
import { useNavigate } from 'react-router-dom'; 

const LoginForm = (props) => {
    const navigate = useNavigate();
    const [form] = Form.useForm(); 
    const handleReset = () => {
        form.resetFields();
    }; 
    const handleRegister = () => {
        navigate('/register'); 
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
                onFinishFailed={props.onFinishFailed}
                initialValues={{
                    username: '', password: '', remember: 'true'
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
                <Form.Item name="remember" valuePropName="checked" {...tailLayout} >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Space wrap>
                        <Button type="primary" htmlType="submit">Submit</Button>
                        <Button htmlType="button" onClick={handleReset}>Reset</Button>
                        <Button htmlType="button" onClick={handleRegister}>Register</Button>
                    </Space>
                </Form.Item>
            </Form>
    )
}; 

export default LoginForm; 
