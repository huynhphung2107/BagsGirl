import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';

import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';
import { useEffect, useState, useContext } from 'react';
import colorAPI from '~/api/propertitesBalo/colorAPI';
import styles from './index.module.scss';
import FormColorEdit from '../../ColorEdit/FormEdit/FormColorEdit';

function TableContent() {
  const [baloList, setBaloList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItem, setTotalItem] = useState(); // Số lượng dữ liệu tổng cộng (tùy chỉnh)

  const handleTableChange = (pagination, filters, sorter) => {
    console.log('Trang hiện tại:', pagination.current);
    console.log('Kích thước trang:', pagination.pageSize);
    console.log('Bộ lọc:', filters);
    console.log('Thông tin sắp xếp:', sorter);
  };
  const columns = [
    {
      title: 'STT',
      // dataIndex: 'count+1',
      // sorter: (a, b) => a.colorCode.localeCompare(b.colorCode),
      width: 100,
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Code',
      dataIndex: 'colorCode',
      sorter: (a, b) => a.colorCode.localeCompare(b.colorCode),
      width: 100,
    },
    {
      title: 'Name Color',
      dataIndex: 'colorName',
      width: 100,
      sorter: (a, b) => a.colorName.localeCompare(b.colorName),
    },
    {
      title: 'Status',
      dataIndex: 'colorStatus',

      width: 100,
      sorter: (a, b) => a.colorStatus.localeCompare(b.colorStatus),
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
          <FormColorEdit color={record} />
          <Popconfirm
            title="Xác Nhận"
            description="Bạn Có chắc chắn muốn xóa?"
            okText="Đồng ý"
            cancelText="Không"
            onConfirm={() => {
              handleDeleteBalo(record.id, 0);
              reload();
            }}
            onCancel={onCancel}
          >
            <Button className="btn btn-danger " icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
      width: 100,
    },
  ];
  const onCancel = () => {};
  const reload = () => {
    setLoading(true);
    getAllBalo(currentPage, pageSize);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const getAllBalo = async (pageNum, pageSize) => {
    try {
      const response = await colorAPI.getAllPagination(pageNum, pageSize);
      const data = response.data.content;
      setTotalItem(response.data.totalElements);
      setBaloList(data);
      setTimeout(() => {}, 300);
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };
  useEffect(() => {
    getAllBalo(currentPage, pageSize);
  }, []);
  const handleDeleteBalo = async (id, status) => {
    try {
      await colorAPI.updateStatus(id, status);
      notification.info({
        message: 'Xóa thành Công',
        description: 'Sản Phẩm Có ID: ' + id + ' đã được xóa thành công!!!',
        duration: 2,
      });
      getAllBalo(currentPage, pageSize);
    } catch (error) {
      console.error('Đã xảy ra lỗi khi xóa sản phẩm: ', error);
    }
  };
  const onShowSizeChange = (current, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(current);
    getAllBalo(current, pageSize);
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
      <Spin spinning={loading}>
        <Table
          size="middle"
          className="table table-striped"
          scroll={{
            x: 1000,
            y: 500,
          }}
          rowKey={(record) => record.id}
          columns={columns}
          dataSource={baloList}
          onChange={handleTableChange}
          pagination={false}
          title={() => <div className="red-table-title">Danh sách màu sắc</div>}
        />
        <div className={styles.pagination}>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={onShowSizeChange}
            defaultCurrent={1}
            total={totalItem}
          />
        </div>
      </Spin>
    </div>
  );
}
export default TableContent;
