import { Button, Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import baloAPI from '~/api/baloAPI';
import FormProductEdit from '../../ProductEdit/FormEdit/FormProductEdit';

function TableContent() {
  //const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [baloList, setBaloList] = useState([]);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 2,
    },
  });
  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await baloAPI.getAll();
      const data = response.data;
      setBaloList(data);
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
      setBaloList([]);
    }
  };
  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
    },
    {
      title: 'Name Balo',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: true,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>View Detail</a>
          <FormProductEdit balo={record} />
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
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="primary" onClick={start} loading={loading}>
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        ></span>
      </div>
      <Table
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
