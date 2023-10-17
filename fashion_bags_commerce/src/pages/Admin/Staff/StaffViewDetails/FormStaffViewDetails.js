import './FormStaffViewDetails.css';

import React, { Fragment, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, Table } from 'antd';
import staffAPI from '~/api/staffAPI';
const { Option } = Select;
function FormStaffViewDetails(props) {
  const { id } = props;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [List, setList] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const fetchProducts = async () => {

    try {
      const response = await staffAPI.getOne(id);
      const data = response.data;
      setList(data);
    console.log(data)
    console.log(response)
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      fixed: 'left',
      width: 100,
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      width: 300,
      fixed: 'left',
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
    },
    {
      title: 'Account',
      dataIndex: 'account',
      width: 100,
      sorter: (a, b) => a.account.localeCompare(b.account),
    },
    {
      title: 'SDT',
      dataIndex: 'phoneNumber',
      width: 200,
      sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: 100,
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 100,
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      width: 100,
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      width: 100,
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
        title: 'Ghi chú',
        dataIndex: ['userInfo', 'note'],
        sorter: (a, b) => a.note.localeCompare(b.note),
        width: 100,
        
      },
    {
        title: 'Chức vụ',
        dataIndex: ['userInfo', 'userRole','roleName'],
        sorter: (a, b) => a.roleName.localeCompare(b.roleName),
        width: 100,
      },
  ];


  return (
    <Fragment>
      <button className='btn btn-info'onClick={showDrawer} icon={<PlusOutlined />}>
        Detail
      </button>
      <Drawer
        title={'View Details'}
        placement="top"
        height={900} // max=900
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              OK
            </Button>
          </Space>
        }
      >
        <div>
          <div
            style={{
              marginBottom: 16,
            }}
          >
          
            <span
              style={{
                marginLeft: 8,
              }}
            ></span>
          </div>
          <Table
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={List}
            onChange={''}
            pagination={pagination}
            scroll={{
              x: 1500,
              y: 500,
            }}
          />
        </div>
      </Drawer>
    </Fragment>
  );
}
export default FormStaffViewDetails;
