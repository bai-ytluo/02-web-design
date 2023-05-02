import React from 'react'; 
import { Button, Form, Input, Space } from 'antd'; 

const SearchForm = (props) => {
    const [form] = Form.useForm(); 
    const handleClear = () => {
        form.resetFields();
    }; 
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
        <Form form={form} name="coordinateForm" {...layout} onFinish={props.onFinish}
                initialValues={{
                    lat:0, lon:0
                }}
                autoComplete="off"
            >
                <Form.Item label="Lat" name="lat"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the latitude!',
                        },
                    ]}>
                    <Input type="number" step="0.0000001" placeholder='latitude' />
                </Form.Item>
                <Form.Item label="Lon" name="lon"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the longitude!',
                        },
                    ]}>
                    <Input type="number" step="0.0000001" placeholder='longitude' />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Space wrap>
                        <Button type="primary" htmlType="submit">Get Data</Button>
                        <Button htmlType="button" onClick={handleClear}>Clear</Button>
                    </Space>
                </Form.Item>
            </Form>
    )
}; 

export default SearchForm; 
