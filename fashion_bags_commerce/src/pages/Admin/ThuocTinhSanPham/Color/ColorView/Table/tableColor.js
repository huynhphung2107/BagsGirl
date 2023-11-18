import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';

import { DeleteOutlined, ReloadOutlined, SyncOutlined } from '@ant-design/icons';
import { useEffect, useState, useContext } from 'react';
import colorAPI from '~/api/propertitesBalo/colorAPI';
import styles from './tableColor.module.scss';
import FormColorEdit from '../../ColorEdit/FormEdit/formColorEdit';
import FormcolorEditTonggle from '../../ColorEdit/FormCreate/formColorCreate';

function TableContent() {
  const [list, setlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
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
      width: 40,
      render: (text, record, index) => <span>{(currentPage - 1) * pageSize + index + 1}</span>,
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
              handleDeleteBalo(record.colorId, 0);
              reload();
            }}
            onCancel={onCancel}
          >
            <Button type="primary" danger icon={<DeleteOutlined />}></Button>
          </Popconfirm>
        </Space>
      ),
      width: 100,
    },
  ];
  const onCancel = () => {};
  const reload = () => {
    setLoading(true);
    getAll(currentPage, pageSize);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    reload();
  }, []);

  const getAll = async (pageNum, pageSize) => {
    try {
      const response = await colorAPI.getAllPagination(pageNum, pageSize);
      const data = response.data.content;
      setTotalItem(response.data.totalElements);
      setlist(data);
      setTimeout(() => {}, 300);
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };
  useEffect(() => {
    getAll(currentPage, pageSize);
  }, []);
  const handleDeleteBalo = async (id, status) => {
    try {
      await colorAPI.updateStatus(id, status);
      notification.info({
        message: 'Xóa thành Công',
        description: 'Sản Phẩm Có ID: ' + id + ' đã được xóa thành công!!!',
        duration: 2,
      });
      getAll(currentPage, pageSize);
    } catch (error) {
      console.error('Đã xảy ra lỗi khi xóa sản phẩm: ', error);
    }
  };
  const onShowSizeChange = (current, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(current);
    getAll(current, pageSize);
  };
  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <FormcolorEditTonggle />
      <Button icon={<ReloadOutlined />} className="" onClick={reload} loading={loading}></Button>
      <Table
        className="table table-striped"
        scroll={{
          x: 1000,
          y: 670,
        }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={list}
        onChange={handleTableChange}
        pagination={false}
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
    </div>
  );
}
export default TableContent;
