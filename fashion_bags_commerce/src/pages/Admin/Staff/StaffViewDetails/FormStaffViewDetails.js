import React, { Fragment, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, Table } from 'antd';
import staffAPI from '~/api/staffAPI';
const { Option } = Select;
function FormStaffViewDetails(props) {
  const { staffId } = props;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const fetchProducts = async () => {
    try {
      const response = await staffAPI.getOne(staffId);
      const data = response.data.content;
      setList(data);
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
    },
    {
      title: 'Full Name',
      dataIndex: ['users', 'fullName'],
      width: 300,
      fixed: 'left',
    },
    {
      title: 'Account',
      dataIndex: 'account',
      width: 100,
    },
    {
      title: 'SDT',
      dataIndex: 'phoneNumber',
      width: 200,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: 100,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: 100,
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      width: 100,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      width: 100,
    },
    {
      title: 'Ghi chú',
      dataIndex: ['users', 'userNote'],
      width: 100,
    },
    {
      title: 'Chức vụ',
      dataIndex: ['users', 'roles', 'roleName'],
      width: 100,
    },
  ];

  return (
    <Fragment>
      <button className="btn btn-info" onClick={showDrawer} icon={<PlusOutlined />}>
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
            dataSource={list}
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
