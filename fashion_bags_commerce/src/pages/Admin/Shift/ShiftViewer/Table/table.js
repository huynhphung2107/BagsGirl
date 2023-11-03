import { Button, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import shiftApi from '~/api/shiftAPI';
import ShiftEdit from '../../ShiftEdit/FormEdit/shiftEdit';

import styles from './index.model.scss';
function TableContent() {
  //const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [baloList, setShiftList] = useState([]);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 15,
    },
  });
  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await shiftApi.getAll();
      const data = response.data;
      setShiftList(data);
      setTimeout(() => {
        setLoading(false);
      }, 300);
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: data.length,
        },
      });
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setShiftList([]);
    }
  };
  const columns = [
    {
      title: 'Ca làm việc',
      dataIndex: 'code',
    },
    {
      title: 'Thời gian bắt đầu',
      dataIndex: 'startTime',
      sorter: true,
    },
    {
      title: 'Thời gian kết thúc',
      dataIndex: 'endTime',
      sorter: true,
    },
    {
      title: 'Tạo bởi',
      dataIndex: 'createBy',
      sorter: true,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      sorter: true,
    },
    {
      title: 'Note',
      dataIndex: 'note',
      sorter: true,
    },
    {
      title: 'Nhân viên nhận ca',
      dataIndex: 'staffUserInfoFullname',
      sorter: true,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>View Detail</a>
          <ShiftEdit shift={record} />
        </Space>
      ),
    },
  ];

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      fetchProducts();
    }, 1000);
  };

  return (
    <div>
      <Button type="primary" onClick={start} loading={loading}>
        Reload
      </Button>
      <Table
        scroll={{
          x: 1000,
          y: 590,
        }}
        className={styles.tables}
        rowKey={(record) => record.code}
        loading={loading}
        columns={columns}
        dataSource={baloList}
        onChange={handleTableChange}
        pagination={tableParams.pagination}
      />
    </div>
  );
}
export default TableContent;
