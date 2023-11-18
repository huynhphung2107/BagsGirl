import React, { useState, useEffect, Fragment } from 'react';
import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import materialAPI from '~/api/propertitesBalo/materialAPI';
import { DeleteOutlined, ReloadOutlined, SyncOutlined } from '@ant-design/icons';
import styles from './tableMaterial.module.scss';
import FormMaterialEdit from '../../MaterialEdit/FormEdit/formMaterialEdit';
import FormMaterialCreate from '../../MaterialEdit/FormCreate/formMaterialCreate';
// import FormBrandEdit from '../../BrandEdit/FormEdit/FormBrandEdit';
const TableContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesSize, setPagesSize] = useState(15);
  const [totalItem, setTotalItem] = useState();

  const onCancel = () => {};
  const reload = () => {
    setLoading(true);
    getAllPage(currentPage, pagesSize);
    setTimeout(() => {
      setLoading(false);
    }, 300);
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

  const getAllPage = async (current, pageSize) => {
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
      width: 40,
      render: (text, record, index) => <span>{(currentPage - 1) * pagesSize + index + 1}</span>,
    },
    {
      title: 'Code',
      dataIndex: 'materialCode',
      sorter: (a, b) => a.materialCode.localeCompare(b.materialCode),
      width: 150,
    },
    {
      title: 'Name ',
      dataIndex: 'materialName',
      width: 150,
      sorter: (a, b) => a.materialName.localeCompare(b.materialName),
    },
    {
      title: 'Status',
      dataIndex: 'materialStatus',

      width: 150,
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
              deleteHandle(record.materialId, 0);
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
    const xoa = await materialAPI.updateStatus(id, status);
    notification.info({
      message: 'Hủy trạng thái',
      description: 'Đã hủy trang thái thành công',
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
      <FormMaterialCreate />
      <Button icon={<ReloadOutlined />} onClick={reload} loading={loading}></Button>
      <Table
        size="middle"
        className="table table-striped"
        scroll={{
          x: 1000,
          y: 670,
        }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={data}
        pagination={false}
        // onChange={handlePageChange} // Handle page changes
        // loading={loading}
      />
      <div className={styles.pagination}>
        <Pagination
          showSizeChanger
          total={totalItem}
          onChange={onChange}
          defaultCurrent={1}
          defaultPageSize={pagesSize}
        />
      </div>
    </div>
  );
};

export default TableContent;
