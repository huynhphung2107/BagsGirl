import React, { useState, useEffect, Fragment } from 'react';
import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import brandAPI from '~/api/propertitesBalo/brandAPI';
import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import FormBrandEdit from '../../BrandEdit/FormEdit/FormBrandEdit';
import FormBrandCreate from '../../BrandEdit/FormCreate/FormBrandCreate';
const TableContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesSize, setPagesSize] = useState(5);
  const [totalItem, setTotalItem] = useState();

  const onCancel = () => {};
  const reload = () => {
    setLoading(true);
    getAllBrand(currentPage, pagesSize);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    // Fetch brand data using the brandAPI.getAll function
    getAllBrand(currentPage, pagesSize);
    reload();
  }, []); // Update data when page or page size changes

  const onChange = (current, pageSize) => {
    console.log(current);
    console.log(pageSize);
    setCurrentPage(current);
    setPagesSize(pageSize);
    getAllBrand(current, pageSize);
  };

  const getAllBrand = async (current, pageSize) => {
    try {
      const response = await brandAPI.getAllPagination(current, pageSize);
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
      width: 150,
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Code',
      dataIndex: 'brandCode',
      sorter: (a, b) => a.brandCode.localeCompare(b.brandCode),
      width: 150,
    },
    {
      title: 'Name Brand',
      dataIndex: 'brandName',
      width: 150,
      sorter: (a, b) => a.brandName.localeCompare(b.brandName),
    },
    {
      title: 'Status',
      dataIndex: 'brandStatus',

      width: 150,
      sorter: (a, b) => a.brandStatus.localeCompare(b.brandStatus),
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
          <FormBrandEdit brand={record} />
          <Popconfirm
            title="Xác Nhận"
            description="Bạn Có chắc chắn muốn xóa?"
            okText="Đồng ý"
            cancelText="Không"
            onConfirm={() => {
              deleteHandle(record.colorId, 0);
              reload();
            }}
            onCancel={onCancel}
          >
            <Button type="primary" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
      width: 150,
    },
  ];

  const deleteHandle = async (id, status) => {
    const xoa = await brandAPI.updateStatus(id, status);
    notification.info({
      message: 'Xoa trang thai',
      description: 'Đã hủy thành công trang thái của thương hiệu có id là :' + id,
    });
    getAllBrand(currentPage, pagesSize);
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
        <FormBrandCreate onClick={reload} loading={loading} />
       
        <span
          style={{
            marginLeft: 8,
          }}
        ></span>
      </div>

      <Table
        className={styles.table}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={data}
        pagination={false}
        // onChange={handlePageChange} // Handle page changes
        loading={loading}
      />

      <Pagination
        className={styles.pagination}
        total={totalItem}
        onChange={onChange}
        defaultCurrent={1}
        defaultPageSize={pagesSize}
      />
    </div>
  );
};

export default TableContent;
