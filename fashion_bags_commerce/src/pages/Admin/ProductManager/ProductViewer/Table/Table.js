import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import { useEffect, useState, useContext } from 'react';
import FormProductEdit from '../../ProductEdit/FormEdit/FormProductEdit';
import FormProductViewDetails from '../../ProductViewDetails/FormViewer/FormProductViewDetails';
import baloAPI from '~/api/productsAPI';

import styles from './index.module.scss';
import FormBaloEditTonggle from '../../ProductEdit/FormCreate/FormBaloEditTonggle';
import { DeleteOutlined } from '@ant-design/icons';

function TableContent() {
  const [baloList, setBaloList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesSize, setPagesSize] = useState(15);
  const [totalItem, setTotalItem] = useState();

  const handleTableChange = (pagination, filters, sorter) => {
    console.log('Trang hiện tại:', pagination);
    console.log('Kích thước trang:', pagination.pageSize);
    console.log('Bộ lọc:', filters);
    console.log('Thông tin sắp xếp:', sorter);
  };
  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      width: 40,
      render: (text, record, index) => <span>{(currentPage - 1) * pagesSize + index + 1}</span>,
    },
    {
      title: 'Code',
      dataIndex: 'productCode',
      width: 100,
      sorter: (a, b) => a.productCode.localeCompare(b.productCode),
    },
    {
      title: 'Name Balo',
      dataIndex: 'productName',
      width: 300,
      sorter: (a, b) => a.productName.localeCompare(b.productName),
    },
    {
      title: 'Status',
      dataIndex: 'productStatus',
      width: 100,
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
    },
    {
      title: 'Action',
      key: 'action',
      width: 150,
      render: (_, record) => (
        <Space size="middle">
          <FormProductViewDetails productCode={record.productCode} />
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
            <Button type="primary" danger icon={<DeleteOutlined />}></Button>
          </Popconfirm>
        </Space>
      ),
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
    setCurrentPage(current);
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
      <Spin spinning={loading}>
        <div>
          <FormBaloEditTonggle reload={reload} />

          <Table
            scroll={{
              x: 1000,
              y: 650,
            }}
            rowKey={(record) => record.productCode}
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
