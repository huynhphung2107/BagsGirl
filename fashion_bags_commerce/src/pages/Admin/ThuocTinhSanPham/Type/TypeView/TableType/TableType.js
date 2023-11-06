import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import { DeleteOutlined, ReloadOutlined, SyncOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import typeAPI from '~/api/propertitesBalo/typeAPI';
import styles from './index.module.scss';
import FormTypeEdit from '../../TypeEdit/FormEdit/FormEditType';
import FormTypeCreate from '../../TypeEdit/FormCreate/FormCreateType';

function TableContent() {
  const [typeList, setTypeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [totalItem, setTotalItem] = useState(); // Số lượng dữ liệu tổng cộng

  const handleTableChange = (pagination, filters, sorter) => {};
  const columns = [
    {
      title: 'STT',
      width: 40,
      render: (text, record, index) => <span>{(currentPage - 1) * pageSize + index + 1}</span>,
    },
    {
      title: 'Name Type',
      dataIndex: 'typeName',
      width: 100,
      sorter: (a, b) => a.typeName.localeCompare(b.typeName),
    },
    {
      title: 'Status',
      dataIndex: 'typeStatus',

      width: 100,
      sorter: (a, b) => a.typeStatus.localeCompare(b.typeStatus),
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
            statusText = 'Ngừng hoạt động';
            statusClass = 'other-status';
            break;
          default:
            statusText = 'Trạng thái khác';
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
          <FormTypeEdit
            type={record}
            reload={() => {
              setLoading(true);
            }}
          />
          <Popconfirm
            title="Xác Nhận"
            description="Bạn Có chắc chắn muốn xóa?"
            okText="Đồng ý"
            cancelText="Không"
            onConfirm={() => {
              handleDeleteType(record.typeId, -1);
              reload();
            }}
            onCancel={onCancel}
          >
            <Button className="btn btn-danger " icon={<DeleteOutlined />}></Button>
          </Popconfirm>
        </Space>
      ),
      width: 100,
    },
  ];
  const onCancel = () => {};
  const reload = () => {
    setLoading(true);
    getAllPhanTrangType(currentPage, pageSize);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  useEffect(() => {
    if (loading) {
      // Tải lại bảng khi biến trạng thái thay đổi
      getAllPhanTrangType(currentPage, pageSize);
      setLoading(false); // Reset lại trạng thái
    }
  }, [loading]);

  const getAllPhanTrangType = async (pageNum, pageSize) => {
    try {
      const response = await typeAPI.getAllPhanTrang(pageNum, pageSize);
      const data = response.data.content;
      setTotalItem(response.data.totalElements);
      setTypeList(data);
      setTimeout(() => {}, 500);
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };

  const handleDeleteType = async (id, status) => {
    try {
      await typeAPI.updateStatus(id, status);
      notification.info({
        message: 'Xóa thành Công',
        description: 'Type Có ID: ' + id + ' đã được xóa thành công!!!',
        duration: 2,
      });
      getAllPhanTrangType(currentPage, pageSize);
    } catch (error) {
      console.error('Đã xảy ra lỗi khi xóa Type: ', error);
    }
  };
  const onShowSizeChange = (current, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(current);
    getAllPhanTrangType(current, pageSize);
  };
  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <FormTypeCreate />
      <Button icon={<ReloadOutlined />} onClick={reload} loading={loading}></Button>
      <Table
        className="table table-striped"
        scroll={{
          x: 1000,
          y: 670,
        }}
        rowKey={(record) => record.typeId}
        columns={columns}
        dataSource={typeList}
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
