import React, { useState, useEffect, Fragment } from 'react';
import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import customerAPI from '~/api/customerAPI';
import { DeleteOutlined, ReloadOutlined, SyncOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import { tab } from '@testing-library/user-event/dist/tab';
import FormCustomerEdit from '../../CustomerEdit/FormEdit/FormCustomerEdit';
import SearchForm from './FormSearch/SearchForm';
import FormCustomerCreate from '../../CustomerEdit/FormCreate/FormCustomerCreate';

const TableContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesSize, setPagesSize] = useState(15);
  const [totalItem, setTotalItem] = useState();
  const [search, setSearch] = useState('');

  const onCancel = () => {};
  const reload = () => {
    setLoading(true);
    getAll(search, currentPage, pagesSize);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    reload();
  }, []);

  useEffect(() => {
    if (loading) {
      // Tải lại bảng khi biến trạng thái thay đổi
      reload();
    }
  }, [loading]);

  const onChange = (current, pageSize) => {
    setCurrentPage(current);
    setPagesSize(pageSize);
    getAll(search, current, pageSize);
  };

  const handleSearchChange = (newFilter) => {
    setSearch(newFilter);
    setLoading(true);
    setCurrentPage(1);
  };
  const getAll = async (keyword, page, size) => {
    try {
      const response = await customerAPI.getSearchPagination(keyword, page, size);
      const data = response.data.content;
      setTotalItem(response.data.totalElements);
      setData(data);
    } catch (error) {}
  };

  // Define your table columns
  const columns = [
    {
      title: 'STT',
      width: 40,
      render: (text, record, index) => <span>{(currentPage - 1) * pagesSize + index + 1}</span>,
    },
    {
      title: 'Họ và tên',
      dataIndex: ['users', 'fullName'],
      sorter: (a, b) => a.users.fullName.localeCompare(b.users.fullName),
      width: 100,
    },
    {
      title: 'Tài khoản',
      dataIndex: ['users', 'account'],
      sorter: (a, b) => a.users.account.localeCompare(b.users.account),
      width: 100,
    },
    {
      title: 'Mật khẩu',
      dataIndex: ['users', 'password'],
      sorter: (a, b) => a.users.password.localeCompare(b.users.password),
      width: 100,
    },
    {
      title: 'SĐT',
      dataIndex: ['users', 'phoneNumber'],
      sorter: (a, b) => a.users.phoneNumber.localeCompare(b.users.phoneNumber),
      width: 100,
    },
    {
      title: 'Giới tính',
      dataIndex: ['users', 'gender'],
      width: 100,
      render: (gender) => {
        return gender ? 'Nam' : 'Nữ';
      },
    },

    {
      title: 'Địa chỉ',
      dataIndex: ['users', 'address'],
      sorter: (a, b) => a.users.address.localeCompare(b.users.address),
      width: 100,
    },

    // {
    //   title: 'Chức vụ',
    //   dataIndex: ['users', 'roles', 'roleName'],
    //   sorter: (a, b) => a.users.roles.roleName.localeCompare(b.users.roles.roleName),
    //   width: 100,
    // },
    {
      title: 'Điểm',
      dataIndex: 'customerPoint',
      sorter: (a, b) => a.customerPoint.localeCompare(b.customerPoint),
      width: 100,
    },
    {
      title: 'Ghi chú',
      dataIndex: ['users', 'userNote'],
      sorter: (a, b) => a.users.userNote.localeCompare(b.users.userNote),
      width: 100,
    },

    {
      title: 'Trạng thái',
      dataIndex: 'customerStatus',

      width: 150,
      render: (status) => {
        let statusText;
        let statusClass;

        switch (status) {
          case 1:
            statusText = 'Hoạt động';
            statusClass = 'styles.active-status';
            break;
          case 0:
            statusText = 'Không hoạt động';
            statusClass = 'inactive-status';
            break;
          case -1:
            statusText = 'Ngừng hoạt động';
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
          <FormCustomerEdit
            customerData={record}
            reload={() => {
              setLoading(true);
            }}
          />

          <Popconfirm
            title="Xác Nhận"
            description="Bạn Có chắc chắn muốn xóa?"
            okText="Đồng ý"
            cancelText="Không"
            onConfirm={() => {
              deleteHandle(record.customerId, 0);
              reload();
            }}
            onCancel={onCancel}
          >
            <Button type="primary" danger icon={<DeleteOutlined />}></Button>
          </Popconfirm>
        </Space>
      ),

      width: 100,
    },
  ];

  const deleteHandle = async (id, status) => {
    const xoa = await customerAPI.updateStatus(id, status);
    notification.info({
      message: 'Thông báo',
      description: 'Đã hủy thành công trạng thái nhân viên có id là :' + id,
    });
    reload();
  };

  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <SearchForm onSubmit={handleSearchChange} />
      <FormCustomerCreate />
      <Button icon={<ReloadOutlined />} className="" onClick={reload} loading={loading}></Button>

      <Table
        scroll={{
          x: 550,
          y: 570,
        }}
        rowKey={(record) => record.customerId}
        columns={columns}
        dataSource={data}
        pagination={false}
        // onChange={handlePageChange} // Handle page changes
      />

      <Pagination
        className={styles.pagination}
        total={totalItem}
        onChange={onChange}
        defaultCurrent={1}
        current={currentPage}
        defaultPageSize={pagesSize}
      />
    </div>
  );
};

export default TableContent;

//add nhan vien
