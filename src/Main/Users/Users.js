import React from 'react'; 
import { Space, Modal, Table } from 'antd'; 
import { ExclamationCircleFilled } from '@ant-design/icons';
import './Users.css'; 

class Users extends React.Component {
    render() {
        const { confirm } = Modal; 
        const showConfirm = (username, delUser) => {
            confirm({
                title: 'Do you Want to delete this user?',
                icon: <ExclamationCircleFilled />,
                content: `User: ${username}`,
                onOk() {
                    console.log('OK', username);
                    delUser(username);
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        };
        const columns = [
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Password',
                dataIndex: 'password',
                key: 'password',
            },
            {
                title: 'Action',
                key: 'action',
                render: (_, record) => (
                    <Space size="middle">
                        <a
                            className={(record.username==='admin' || record.username===sessionStorage.username) ? 'disabled' : ''}
                            onClick={() => showConfirm(record.username, this.props.delUser)}
                        >
                            Delete
                        </ a>
                    </Space>
                ),
            },
        ]; 
        const userMap = this.props.userMap; 
        const userData = Array.from( userMap, ([key,value]) => ({username:key,...value}) ); 
        return (
            <div className="Users">
                <h1 style={{color:'blue'}}>User Lists</h1>
                <Table columns={columns} dataSource={userData} /> 
            </div>
        )
    }
}; 

export default Users; 