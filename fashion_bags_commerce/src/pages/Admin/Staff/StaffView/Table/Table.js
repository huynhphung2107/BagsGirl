import React, { useState, useEffect, Fragment } from 'react';
import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import staffAPI from '~/api/staffAPI';
import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';
import table from './tableStaff.css';
import FormStaffViewDetails from '../../StaffViewDetails/FormStaffViewDetails';
// import FormvoucherEdit from '../../voucherEdit/FormEdit/FormvoucherEdit';
const TableContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesSize, setPagesSize] = useState(5);
  const [totalItem, setTotalItem] = useState();

  

  const onCancel = () => {};
  const reload = () => {
    setLoading(true);
    getAll(currentPage, pagesSize);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    // Fetch voucher data using the staffAPI.getAll function
    getAll(currentPage, pagesSize);
    reload();
  }, []); // Update data when page or page size changes

  const onChange = (current, pageSize) => {
    console.log(current);
    console.log(pageSize);
    setCurrentPage(current);
    setPagesSize(pageSize);
    getAll(current, pageSize);
  };

  const getAll = async (current, pageSize) => {
    try {
      const response = await staffAPI.getAll(current, pageSize);
      const data = response.data.content;
      console.log(data);
      setTotalItem(response.data.totalElements);
      setData(data);
    } catch (error) {}
  };

  // Define your table columns
  const columns = [
    {
      title: 'STT',
      width: 100,
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Họ và tên',
      dataIndex: ['userInfo', 'fullName'],
      sorter: (a, b) => a.userInfo.fullName.localeCompare(b.userInfo.fullName),
      width: 100,
    },
    {
      title: 'Tài khoản',
      dataIndex: ['userInfo', 'account'],
      sorter: (a, b) => a.userInfo.account.localeCompare(b.userInfo.account),
      width: 100,
    },
    {
      title: 'SĐT',
      dataIndex: ['userInfo', 'phoneNumber'],
      sorter: (a, b) => a.userInfo.phoneNumber.localeCompare(b.userInfo.phoneNumber),
      width: 100,
    },
    {
      title: 'Giới tính',
      dataIndex: ['userInfo', 'gender'],
      width: 100,
      render: (gender) => {
        return gender ? 'Nam' : 'Nữ';
      },
    },

    {
      title: 'Địa chỉ',
      dataIndex: ['userInfo', 'address'],
      sorter: (a, b) => a.userInfo.address.localeCompare(b.userInfo.address),
      width: 100,
    },
    
    {
      title: 'Chức vụ',
      dataIndex: ['userInfo', 'userRole','roleName'],
      sorter: (a, b) => a.userInfo.userRole.roleName.localeCompare(b.userInfo.userRole.roleName),
      width: 100,
    },
    {
      title: 'Ghi chú',
      dataIndex: ['userInfo', 'note'],
      sorter: (a, b) => a.userInfo.note.localeCompare(b.userInfo.note),
      width: 100,
      
    },
   
    {
      title: 'Trạng thái',
      dataIndex: 'staffStatus',

      width: 150,
      render: (status) => {
        let statusText;
        let statusClass;

        switch (status) {
          case 1:
            statusText = 'Hoạt động';
            statusClass = 'active-status';
            break;
          case 0:
            statusText = 'Không hoạt động';
            statusClass = 'inactive-status';
            break;
          case -1:
            statusText = 'Trạng thái khác';
            statusClass = 'other-status';
            break;
          default:
            statusText = 'Không hoạt động';
            statusClass = 'inactive-status';
        }

        return <span className={statusClass}>{statusText}</span>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* <FormvoucherEdit voucher={record} /> */}
          <FormStaffViewDetails id={record.id}/>
          
          <Popconfirm
            title="Xác Nhận"
            description="Bạn Có chắc chắn muốn xóa?"
            okText="Đồng ý"
            cancelText="Không"
            onConfirm={() => {
              deleteHandle(record.id, 0);
              reload();
            }}
            onCancel={onCancel}
          >
            <Button className="btn btn-danger "
          
            icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),

      width: 100,
    },
  ];

  const deleteHandle = async (id, status) => {
    const xoa = await staffAPI.updateStatus(id, status);
    notification.info({
      message: 'Thông báo',
      description: 'Đã hủy thành công trạng thái nhân viên có id là :' + id,
    });
    getAll(currentPage, pagesSize);
    console.log(xoa);
  };

  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="" onClick={reload} loading={loading} icon={<SyncOutlined />}>
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        ></span>
      </div>

      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={data}
        pagination={false}
        // onChange={handlePageChange} // Handle page changes
        loading={loading}
      />

      <Pagination total={totalItem} onChange={onChange} defaultCurrent={1} defaultPageSize={pagesSize} />
    </div>
  );
};

export default TableContent;

//add nhan vien

