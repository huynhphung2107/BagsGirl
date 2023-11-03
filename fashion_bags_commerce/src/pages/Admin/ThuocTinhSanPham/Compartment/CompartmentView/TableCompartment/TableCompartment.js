import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import { DeleteOutlined, ReloadOutlined, SyncOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import compartmentAPI from '~/api/propertitesBalo/compartmentAPI';
import styles from './index.module.scss';
import FormEditCompartment from '../../CompartmentEdit/FormEditCompartment/FormEditCompartment';
import FormCreateCompartment from '../../CompartmentEdit/FormCreateCompartment/FormCreateCompartment';

function TableContent() {
  const [compartmentList, setCompartmentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [totalItem, setTotalItem] = useState();

  const handleTableChange = (pagination, filters, sorter) => {};
  const columns = [
    {
      title: 'STT',
      width: 40,
      render: (text, record, index) => <span>{(currentPage - 1) * pageSize + index + 1}</span>,
    },
    {
      title: 'Tên ngăn',
      dataIndex: 'compartmentName',
      width: 100,
      sorter: (a, b) => a.compartmentName.localeCompare(b.compartmentName),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'compartmentStatus',

      width: 100,
      sorter: (a, b) => a.compartmentStatus.localeCompare(b.compartmentStatus),
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
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <FormEditCompartment
            compartment={record}
            reload={() => {
              setLoading(true);
            }}
          />
          <Popconfirm
            title="Xác Nhận"
            description="Bạn có chắc chắn muốn xóa?"
            okText="Đồng ý"
            cancelText="Không"
            onConfirm={() => {
              handleDeleteCompartment(record.compartmentId, -1);
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
    getAllPhanTrangCompartment(currentPage, pageSize);
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

  const getAllPhanTrangCompartment = async (pageNum, pageSize) => {
    try {
      const response = await compartmentAPI.getAllPhanTrang(pageNum, pageSize);
      const data = response.data.content;
      setTotalItem(response.data.totalElements);
      setCompartmentList(data);
      setTimeout(() => {}, 500);
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };
  useEffect(() => {
    if (loading) {
      // Tải lại bảng khi biến trạng thái thay đổi
      getAllPhanTrangCompartment(currentPage, pageSize);
      setLoading(false); // Reset lại trạng thái
    }
  }, [loading]);
  const handleDeleteCompartment = async (id, status) => {
    try {
      await compartmentAPI.updateStatus(id, status);
      notification.info({
        message: 'Xóa thành công',
        description: 'Ngăn có ID: ' + id + ' đã được xóa thành công!!!',
        duration: 2,
      });
      getAllPhanTrangCompartment(currentPage, pageSize);
    } catch (error) {
      console.error('Đã xảy ra lỗi khi xóa ngăn: ', error);
    }
  };
  const onShowSizeChange = (current, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(current);
    getAllPhanTrangCompartment(current, pageSize);
  };
  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <FormCreateCompartment />
      <Button icon={<ReloadOutlined />}  onClick={reload} loading={loading}></Button>

      <Spin spinning={loading}>
        <Table
          className="table table-striped"
          scroll={{
            x: 1000,
            y: 640,
          }}
          rowKey={(record) => record.compartmentId}
          columns={columns}
          dataSource={compartmentList}
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
      </Spin>
    </div>
  );
}
export default TableContent;
