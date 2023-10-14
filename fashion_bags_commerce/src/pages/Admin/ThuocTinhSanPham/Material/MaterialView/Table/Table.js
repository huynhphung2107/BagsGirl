import React, { useState, useEffect, Fragment } from 'react';
import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import materialAPI from '~/api/propertitesBalo/materialAPI';
import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';
import table from './table.css';
import FormMaterialEdit from '../../MaterialEdit/FormEdit/FormMaterialEdit';
// import FormBrandEdit from '../../BrandEdit/FormEdit/FormBrandEdit';
const TableContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesSize, setPagesSize] = useState(5);
  const [totalItem, setTotalItem] = useState();

  const onCancel = () => {};
  const reload = () => {
    setLoading(true);
    getAllPage(currentPage, pagesSize);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    // Fetch brand data using the brandAPI.getAll function
    getAllPage(currentPage, pagesSize);
    reload();
  }, []); // Update data when page or page size changes

  const onChange = (current, pageSize) => {
    console.log(current);
    console.log(pageSize);
    setCurrentPage(current);
    setPagesSize(pageSize);
    getAllPage(current, pageSize);
  };

  const getAllPage= async (current, pageSize) => {
    try {
      const response = await materialAPI.getAllPage(current, pageSize);
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
      dataIndex: 'materialCode',
      sorter: (a, b) => a.materialCode.localeCompare(b.materialCode),
      width: 100,
    },
    {
      title: 'Name ',
      dataIndex: 'materialName',
      width: 100,
      sorter: (a, b) => a.materialName.localeCompare(b.materialName),
    },
    {
      title: 'Status',
      dataIndex: 'materialStatus',

      width: 100,
      sorter: (a, b) => a.materialStatus.localeCompare(b.materialStatus),
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
          <FormMaterialEdit material={record} />
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
    const xoa = await materialAPI.updateStatus(id, status);
    notification.info({
      message: 'Hủy trạng thái',
      description: 'Đã hủy trang thái thành công'
    });
    getAllPage(currentPage, pagesSize);
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
