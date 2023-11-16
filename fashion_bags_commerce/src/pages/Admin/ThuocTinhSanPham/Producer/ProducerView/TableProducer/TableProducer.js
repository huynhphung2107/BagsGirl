import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import { DeleteOutlined, ReloadOutlined, SyncOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import producerAPI from '~/api/propertitesBalo/producerAPI';
import styles from './tableProducer.module.scss';
import FormEditProducer from '../../ProducerEdit/FormEditProducer/formEditProducer';
import FormProducerCreate from '../../ProducerEdit/FormCreateProducer/formCreateProduer';
// import FormTypeEdit from '../../TypeEdit/FormEdit/FormEditType';

function TableContent() {
  const [producerList, setProducerList] = useState([]);
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
      title: 'Tên nhà sản xuất',
      dataIndex: 'producerName',
      width: 100,
      sorter: (a, b) => a.producerName.localeCompare(b.producerName),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'producerStatus',

      width: 100,
      sorter: (a, b) => a.producerStatus.localeCompare(b.producerStatus),
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
          <FormEditProducer
            producer={record}
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
              handleDeleteProducer(record.producerId, -1);
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
    getAllPhanTrangProducer(currentPage, pageSize);
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

  const getAllPhanTrangProducer = async (pageNum, pageSize) => {
    try {
      const response = await producerAPI.getAllPhanTrang(pageNum, pageSize);
      const data = response.data.content;
      setTotalItem(response.data.totalElements);
      setProducerList(data);
      setTimeout(() => {}, 500);
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };
  useEffect(() => {
    if (loading) {
      // Tải lại bảng khi biến trạng thái thay đổi
      getAllPhanTrangProducer(currentPage, pageSize);
      setLoading(false); // Reset lại trạng thái
    }
  }, [loading]);
  const handleDeleteProducer = async (id, status) => {
    try {
      await producerAPI.updateStatus(id, status);
      notification.info({
        message: 'Xóa thành công',
        description: 'Nhà sản xuất có ID: ' + id + ' đã được xóa thành công!!!',
        duration: 2,
      });
      getAllPhanTrangProducer(currentPage, pageSize);
    } catch (error) {
      console.error('Đã xảy ra lỗi khi xóa nhà sản xuất: ', error);
    }
  };
  const onShowSizeChange = (current, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(current);
    getAllPhanTrangProducer(current, pageSize);
  };
  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <FormProducerCreate />
      <Button icon={<ReloadOutlined />} onClick={reload} loading={loading}></Button>

      <Table
        className="table table-striped"
        scroll={{
          x: 1000,
          y: 670,
        }}
        rowKey={(record) => record.producerId}
        columns={columns}
        dataSource={producerList}
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
