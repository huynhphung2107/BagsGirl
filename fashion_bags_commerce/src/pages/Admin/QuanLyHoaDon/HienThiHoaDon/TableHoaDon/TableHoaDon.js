import { Button, Card, Col, Pagination, Popconfirm, Row, Space, Spin, Table, notification } from 'antd';
import {
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  ReloadOutlined,
  SyncOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import BillDetailsAPI from '~/api/BillDetailsAPI';
import styles from './index.module.scss';
import SearchForm from './FormSearch/SearchForm';
import Loc from './FormLoc/LocTheoNgay';

function TableContent() {
  const [buckleTypeList, setBuckleTypeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [totalItem, setTotalItem] = useState();
  const [search, setSearch] = useState('');

  const handleTableChange = (pagination, filters, sorter) => {};

  const columns = [
    {
      title: 'STT',
      width: 40,
      render: (text, record, index) => <span>{(currentPage - 1) * pageSize + index + 1}</span>,
    },
    {
      title: 'Mã hóa đơn',
      dataIndex: 'buckleTypeName',
      width: 100,
      // sorter: (a, b) => a.buckleTypeName.localeCompare(b.buckleTypeName),
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'buckleTypeName',
      width: 100,
      // sorter: (a, b) => a.buckleTypeName.localeCompare(b.buckleTypeName),
    },
    {
      title: 'Tên nhân viên',
      dataIndex: 'buckleTypeName',
      width: 100,
      // sorter: (a, b) => a.buckleTypeName.localeCompare(b.buckleTypeName),
    },
    {
      title: 'SĐT khách hàng',
      dataIndex: 'buckleTypeName',
      width: 100,
      // sorter: (a, b) => a.buckleTypeName.localeCompare(b.buckleTypeName),
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'buckleTypeName',
      width: 100,
      // sorter: (a, b) => a.buckleTypeName.localeCompare(b.buckleTypeName),
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'buckleTypeName',
      width: 100,
      // sorter: (a, b) => a.buckleTypeName.localeCompare(b.buckleTypeName),
    },
    {
      title: 'Tổng tiền',
      dataIndex: 'buckleTypeName',
      width: 100,
      // sorter: (a, b) => a.buckleTypeName.localeCompare(b.buckleTypeName),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'buckleTypeStatus',

      width: 100,
      sorter: (a, b) => a.buckleTypeStatus.localeCompare(b.buckleTypeStatus),
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
          {/* <FormEditBuckleType buckleType={record} reload={() => setLoading(true)} /> */}
          <Popconfirm
            title="Xác Nhận"
            description="Bạn Có chắc chắn muốn xóa?"
            okText="Đồng ý"
            cancelText="Không"
            onConfirm={() => {
              handleDeleteBuckleType(record.buckleTypeId, -1);
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
    getAllPhanTrang(currentPage, pageSize);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    reload();
  }, []);

  useEffect(() => {
    if (loading) {
      reload();
    }
  }, [loading]);

  const getAllPhanTrang = async (pageNum, pageSize) => {
    try {
      const response = await BillDetailsAPI.getAll(pageNum, pageSize);
      const data = response.data.content;
      setTotalItem(response.data.totalElements);
      setBuckleTypeList(data);
      setTimeout(() => {}, 500);
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };

  const handleSearchChange = (newFilter) => {
    if (newFilter === undefined || newFilter.trim().length === 0) {
      setSearch('');
      setLoading(true);
      setCurrentPage(1);
    } else {
      setSearch(newFilter.trim());
      setLoading(true);
      setCurrentPage(1);
    }
  };

  const handleDeleteBuckleType = async (id, status) => {
    try {
      await BillDetailsAPI.updateStatus(id, status);
      notification.info({
        message: 'Xóa thành Công',
        description: 'Kiểu khóa Có ID: ' + id + ' đã được xóa thành công!!!',
        duration: 2,
      });
      setLoading(true);
    } catch (error) {
      console.error('Đã xảy ra lỗi khi xóa kiểu khóa: ', error);
    }
  };
  const onShowSizeChange = (current, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(current);
    getAllPhanTrang(current, pageSize);
  };
  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <Card style={{ marginBottom: '15px', marginTop: '5px' }}>
        <Loc onClick={reload} loading={loading}></Loc>
      </Card>
      <Card>
        <Row>
          <Col span={12}>
            <Button className={styles.buttonAll} icon={<UnorderedListOutlined />}>
              Tất cả
            </Button>
            <Button className={styles.buttonAllYellow} icon={<ReloadOutlined />} loading={loading}>
              Chờ xác nhận
            </Button>
            <Button className={styles.buttonAllGreen} icon={<ClockCircleOutlined />} loading={loading}>
              Đang xử lý
            </Button>
            <Button className={styles.buttonAllDone} icon={<CheckOutlined />} loading={loading}>
              Hoàn thành
            </Button>
            <Button className={styles.buttonAllRed} icon={<CloseOutlined />} loading={loading}>
              Đã hủy
            </Button>
          </Col>
          <Col span={12}>
            {' '}
            <SearchForm onSubmit={handleSearchChange} />
          </Col>
        </Row>
        <Table
          size="middle"
          className="table table-striped"
          scroll={{
            x: 1000,
            y: 630,
          }}
          rowKey={(record) => record.buckleTypeId}
          columns={columns}
          dataSource={buckleTypeList}
          onChange={handleTableChange}
          pagination={false}
        />
        <div className={styles.pagination}>
          <Pagination
            showSizeChanger
            onShowSizeChange={onShowSizeChange}
            onChange={onShowSizeChange}
            current={currentPage}
            defaultPageSize={pageSize}
            defaultCurrent={1}
            total={totalItem}
          />
        </div>
      </Card>
    </div>
  );
}
export default TableContent;
