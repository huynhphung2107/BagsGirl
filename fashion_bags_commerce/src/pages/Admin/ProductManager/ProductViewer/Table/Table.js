import { Button, Popconfirm, Space, Table, notification } from 'antd';
import { useEffect, useState, useContext } from 'react';
import FormProductEdit from '../../ProductEdit/FormEdit/FormProductEdit';
import FormProductViewDetails from '../../ProductViewDetails/FormViewer/FormProductViewDetails';
import { BaloContext } from '~/context/BaloProvider';
import baloAPI from '~/api/baloAPI';

function TableContent() {
  const { baloList, updateBaloList } = useContext(BaloContext);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 14,
  });
  const handleTableChange = (pagination, filters, sorter) => {
    console.log('Trang hiện tại:', pagination.current);
    console.log('Kích thước trang:', pagination.pageSize);
    console.log('Bộ lọc:', filters);
    console.log('Thông tin sắp xếp:', sorter);

    setPagination(pagination);
  };
  const columns = [
    {
      title: 'Code',
      dataIndex: 'baloCode',
      sorter: (a, b) => a.baloCode.localeCompare(b.baloCode),
      width: 200,
    },
    {
      title: 'Name Balo',
      dataIndex: 'baloName',
      sorter: (a, b) => a.baloName.localeCompare(b.baloName),
    },
    {
      title: 'Status',
      dataIndex: 'baloStatusString',
      sorter: (a, b) => a.baloStatusString.localeCompare(b.baloStatusString),
      width: 300,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <FormProductViewDetails baloCode={record.baloCode} />
          <FormProductEdit balo={record} />
          <Popconfirm
            title="Xác Nhận"
            description="Bạn Có chắc chắn muốn xóa?"
            okText="Đồng ý"
            cancelText="Không"
            onConfirm={() => {
              handleDeleteBalo(record.id, -1);
              start();
            }}
            onCancel={onCancel}
          >
            <Button>Xóa</Button>
          </Popconfirm>
        </Space>
      ),
      width: 300,
    },
  ];
  const onCancel = () => {};
  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      updateBaloList();
    }, 1000);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      updateBaloList();
    }, 1000);
  }, []);

  const handleDeleteBalo = async (id, status) => {
    try {
      await baloAPI.updateStatus(id, status);
      // const updatedList = baloList.filter((item) => item.id !== id);
      updateBaloList();
      notification.info({
        message: 'Xóa thành Công',
        description: 'Sản Phẩm Có ID: ' + id + ' đã được xóa thành công!!!',
        duration: 2,
      });
      // console.log('Sản phẩm đã được xóa thành công.');
    } catch (error) {
      console.error('Đã xảy ra lỗi khi xóa sản phẩm: ', error);
    }
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
        size="midle"
        scroll={{
          x: 1500,
          y: 500,
        }}
        rowKey={(record) => record.id}
        loading={loading}
        columns={columns}
        dataSource={baloList}
        onChange={handleTableChange}
        pagination={pagination}
      />
    </div>
  );
}
export default TableContent;
