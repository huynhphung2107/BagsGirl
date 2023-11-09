import React, { useState, useEffect, Fragment } from 'react';
import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import staffAPI from '~/api/staffAPI';
import { DeleteOutlined, ReloadOutlined, SyncOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
// import FormStaffViewDetails from '../../StaffViewDetails/FormStaffViewDetails';
import FormStaffEdit from '../../StaffEdit/FormEdit/FormStaffEdit';
import SearchForm from './FormSearch/SearchForm';
import FormStaffCreate from '../../StaffEdit/FormCreate/FormStaffCreate';
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

  const onChange = (current, pageSize) => {
    setCurrentPage(current);
    setPagesSize(pageSize);
    getAll(search, current, pageSize);
  };

  const handleSearchChange = (newFilter) => {
    if (newFilter === undefined || newFilter.trim().length === 0) {
      setSearch('');
      setLoading(true);
      setCurrentPage(1);
    } else {
      setSearch(newFilter.trim());
      setLoading(true);
      setCurrentPage(1);
    };


  };

  useEffect(() => {
    reload();
  }, []);

  useEffect(() => {
    if (loading) {
      reload();
    }
  }, [loading]);

  const getAll = async (keyword, current, pageSize) => {
    try {
      const response = await staffAPI.getSearchPagination(keyword, current, pageSize);
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

    {
      title: 'Chức vụ',
      dataIndex: ['users', 'roles', 'roleName'],
      sorter: (a, b) => a.users.roles.roleName.localeCompare(b.users.roles.roleName),
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
      dataIndex: 'staffStatus',

      width: 100,
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
          <FormStaffEdit
            staffData={record}
            reload={() => {
              setLoading(true);
            }}
          />
          {/* <FormStaffViewDetails id={record.id} /> */}

          <Popconfirm
            title="Xác Nhận"
            description="Bạn Có chắc chắn muốn xóa?"
            okText="Đồng ý"
            cancelText="Không"
            onConfirm={() => {
              deleteHandle(record.staffId, 0);
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
    const xoa = await staffAPI.updateStatus(id, status);
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
      <FormStaffCreate />
      <Button icon={<ReloadOutlined />} className="" onClick={reload} loading={loading}></Button>

      <Table
        className="table table-striped"
        scroll={{
          x: 1000,
          y: 590,
        }}
        rowKey={(record) => record.staffId}
        columns={columns}
        dataSource={data}
        pagination={false}
        // onChange={handlePageChange} // Handle page changes
      />

      <Pagination
        className={styles.pagination}
        showSizeChanger
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
