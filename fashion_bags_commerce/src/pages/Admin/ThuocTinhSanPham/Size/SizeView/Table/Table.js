import React, { useState, useEffect, Fragment } from 'react';
import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import sizeAPI from '~/api/propertitesBalo/sizeAPI';
import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import FormSizeEdit from '../../SizeEdit/FormEdit/FormSizeEdit';
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
    }, 300);
  };

  useEffect(() => {
    // Fetch size data using the sizeAPI.getAll function
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
      const response = await sizeAPI.getAllPaginantion(current, pageSize);
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
      title: 'Code',
      dataIndex: 'sizeCode',
      sorter: (a, b) => a.sizeCode.localeCompare(b.sizeCode),
      width: 100,
    },
    {
      title: 'Name size',
      dataIndex: 'sizeName',
      width: 100,
      sorter: (a, b) => a.sizeName.localeCompare(b.sizeName),
    },
    {
      title: 'Size (dài x rộng x cao)',
      dataIndex: 'size', // Use a single dataIndex for the combined data
      width: 100,
      sorter: (a, b) => a.lengthSize.localeCompare(b.lengthSize),
      render: (text, record) => `${record.sizeLength} x ${record.sizeWidth} x ${record.sizeHeight}`,
    },
    {
      title: 'Status',
      dataIndex: 'sizeStatus',

      width: 100,
      sorter: (a, b) => a.sizeStatus.localeCompare(b.sizeStatus),
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
          <FormSizeEdit size={record} />
          <Popconfirm
            title="Xác Nhận"
            description="Bạn Có chắc chắn muốn xóa?"
            okText="Đồng ý"
            cancelText="Không"
            onConfirm={() => {
              deleteHandle(record.sizeId, 0);
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

      width: 100,
    },
  ];

  const deleteHandle = async (id, status) => {
    const xoa = await sizeAPI.updateStatus(id, status);
    notification.info({
      message: 'Xoa trang thai',
      description: 'Đã hủy thành công trang thái của kich cỡ có id là :' + id,
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
