import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import { useEffect, useState, useContext } from 'react';
import FormProductEdit from '../../ProductEdit/FormEdit/FormProductEdit';
import FormProductViewDetails from '../../ProductViewDetails/FormViewer/FormProductViewDetails';
import baloAPI from '~/api/baloAPI';

import styles from './index.module.scss';

function TableContent() {
  const [baloList, setBaloList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesSize, setPagesSize] = useState(10);
  const [totalItem, setTotalItem] = useState();

  const handleTableChange = (pagination, filters, sorter) => {
    console.log('Trang hiện tại:', pagination.current);
    console.log('Kích thước trang:', pagination.pageSize);
    console.log('Bộ lọc:', filters);
    console.log('Thông tin sắp xếp:', sorter);
  };
  const columns = [
    {
      title: 'Code',
      dataIndex: 'baloCode',
      sorter: (a, b) => a.baloCode.localeCompare(b.baloCode),
      width: '100px',
    },
    {
      title: 'Name Balo',
      dataIndex: 'baloName',
      sorter: (a, b) => a.baloName.localeCompare(b.baloName),
    },
    {
      title: 'Status',
      dataIndex: 'baloStatus',
      render: (status) => {
        switch (status) {
          case 1:
            return 'Hoạt động';
          case 0:
            return 'Không hoạt động';
          case -1:
            return 'Trạng thái khác';
          default:
            return 'Không xác định';
        }
      },
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
              reload();
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
  const reload = () => {
    setLoading(true);
    getAllBalo(currentPage, pagesSize);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    handleLoading();
    getAllBalo(currentPage, pagesSize);
  }, [currentPage]);

  const getAllBalo = async (pageNum, pageSize) => {
    try {
      const response = await baloAPI.getAll(pageNum, pageSize);
      const data = response.data.content;

      setTotalItem(response.data.totalElements);
      setBaloList(data);
      setTimeout(() => {}, 300);
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const handleDeleteBalo = async (id, status) => {
    try {
      await baloAPI.updateStatus(id, status);
      notification.info({
        message: 'Xóa thành Công',
        description: 'Sản Phẩm Có ID: ' + id + ' đã được xóa thành công!!!',
        duration: 2,
      });
      getAllBalo(currentPage, pagesSize);
    } catch (error) {
      console.error('Đã xảy ra lỗi khi xóa sản phẩm: ', error);
    }
  };
  const onHandleSizeChange = (current, pageSize) => {
    setCurrentPage(1);
    setPagesSize(pageSize);

    getAllBalo(current, pageSize);
    handleLoading();
  };
  const onHandlePageNum = (current, pageSize) => {
    setCurrentPage(1);
    setPagesSize(pageSize);
    getAllBalo(current, pageSize);
    handleLoading();
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
        <Button type="primary" onClick={reload} loading={loading}>
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        ></span>
      </div>
      <Spin spinning={loading}>
        <div>
          <Table
            style={{
              minHeight: ' 700px',
            }}
            scroll={{
              x: 1000,
              y: 700,
            }}
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={baloList}
            onChange={handleTableChange}
            pagination={false}
          />
          <div className={styles.pagination}>
            <Pagination
              showSizeChanger
              onShowSizeChange={onHandleSizeChange}
              onChange={onHandlePageNum}
              defaultCurrent={1}
              total={totalItem}
            />
          </div>
        </div>
      </Spin>
    </div>
  );
}
export default TableContent;
