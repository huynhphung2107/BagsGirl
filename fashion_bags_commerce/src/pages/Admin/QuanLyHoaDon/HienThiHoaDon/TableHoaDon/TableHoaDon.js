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
<<<<<<< HEAD
import billDetailsAPI from '~/api/BillDetailsAPI';
import styles from './styles.module.scss';
=======
import BillDetailsAPI from '~/api/BillDetailsAPI';
import styles from './index.module.scss';
>>>>>>> Huynh_develop
import SearchForm from './FormSearch/SearchForm';
import Loc from './FormLoc/LocTheoNgay';

function TableContent() {
<<<<<<< HEAD
    const [billDetailsList, setBillDetailsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [totalItem, setTotalItem] = useState();
    const [search, setSearch] = useState('');
    const [statusBill, setStatusBill] = useState('');

    // const handleTableChange = (pagination, filters, sorter) => { };

    const onCancel = () => { };
    const reload = () => {
        setLoading(true);
        getAll(pageNum, pageSize);
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
=======
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
>>>>>>> Huynh_develop
        }

<<<<<<< HEAD
    const onChange = (current, pageSize) => {
        setPageNum(current);
        setPageSize(pageSize);
        setLoading(true);
    };

    const getAll = async (page, size) => {
        try {
            const response = await billDetailsAPI.getAllPaginationStatus(search, statusBill, page, size);
            const data = response.data.content;
            setTotalItem(response.data.totalElements);
            setBillDetailsList(data);
            console.log(statusBill);
        } catch (error) { }
    };

    const deleteHandle = async (id, status) => {
        const xoa = await billDetailsAPI.updateStatus(id, status);
        notification.info({
            message: 'Thông báo',
            description: 'Đã hủy thành công trạng thái nhân viên có id là :' + id,
        });
        reload();
    };

    const handleSearchChange = (newFilter) => {
        if (newFilter === undefined || newFilter.trim().length === 0) {
            setSearch('');
            setLoading(true);
            setPageNum(1);
        } else {
            setSearch(newFilter.trim());
            setLoading(true);
            setPageNum(1);
        };
    };
    const handleTrangThai = (string) => {
        setStatusBill(string);
        console.log(string);
        setLoading(true);
    }


    const columns = [
        {
            title: 'STT',
            width: 40,
            render: (text, record, index) => <span>{(pageNum - 1) * pageSize + index + 1}</span>,
        },
        {
            title: 'Mã hóa đơn',
            dataIndex: ['bills', 'billCode'],
            width: 100,
            sorter: (a, b) => a.bills.billCode.localeCompare(b.bills.billCode),
        },
        {
            title: 'Ngày tạo',
            dataIndex: ['bills', 'billCreateDate'],
            width: 100,
            sorter: (a, b) => a.bills.billCreateDate.localeCompare(b.bills.billCreateDate),
            render: (date) => {
                // Ensure 'date' is a valid date string or Date object
                const formattedDate = new Date(date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                });

                return <span>{formattedDate}</span>;
            },
        },
        {
            title: 'Tên nhân viên',
            dataIndex: ['bills', 'staff', 'users', 'fullName'],
            width: 100,
            sorter: (a, b) => a.bills.staff.users.fullName.localeCompare(b.bills.staff.users.fullName),
        },
        {
            title: 'SĐT khách hàng',
            dataIndex: ['bills', 'customer', 'users', 'phoneNumber'],
            width: 100,
        },
        {
            title: 'Tên khách hàng',
            dataIndex: ['bills', 'customer', 'users', 'fullName'],
            width: 100,
            sorter: (a, b) => a.bills.customer.users.fullName.localeCompare(b.bills.customer.users.fullName),
        },
        {
            title: 'Sản phẩm',
            dataIndex: ['bills', 'productDetails', 'product', 'productName'],
            width: 100,
            sorter: (a, b) => a.bills.productDetails.product.productName.localeCompare(b.bills.productDetails.product.productName),
        },
        {
            title: 'Tổng tiền',
            dataIndex: 'price',
            width: 100,
            sorter: (a, b) => a.price.localeCompare(b.price),
            render: (price) => {
                const formattedPrice = Number(price).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                });
                return <span>{formattedPrice}</span>;
            },
        },
        {
            title: 'Trạng thái',
            dataIndex: ['bills', 'billStatus'],
            width: 100,
            sorter: (a, b) => a.bills.billStatus.localeCompare(b.bills.billStatus),
            render: (status) => {
                let statusText;
                let statusClass;
                let backgroundColor; // Define a variable for text color

                switch (status) {
                    case 1:
                        statusText = 'Chờ xác nhận';
                        statusClass = 'active-status';
                        backgroundColor = 'rgb(0, 234, 255)'; // Change text color for 'Chờ xác nhận' status
                        break;
                    case 0:
                        statusText = 'Hoàn thành';
                        statusClass = 'inactiveStatus';
                        backgroundColor = 'rgb(0, 4, 255)'; // Change text color for 'Hoàn thành' status
                        break;
                    case -1:
                        statusText = 'Đã hủy';
                        statusClass = 'other-status';
                        backgroundColor = 'red'; // Change text color for 'Đã hủy' status
                        break;
                    default:
                        statusText = 'Đang xử lý';
                        statusClass = 'scandel-status';
                        backgroundColor = 'rgb(0, 166, 255)'; // Change text color for 'Đang xử lý' status
                }
                const textStyles = { backgroundColor: backgroundColor, padding: '13px', fontSize: '16px', fontWeight: 'bold', borderRadius: '20px', color: 'white' };
                return <span className={statusClass} style={textStyles}>{statusText}</span>;
            }
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
                            deleteHandle(record.bills.billStatus, -1);
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


    return (
        <div
            style={{
                padding: '10px',
=======
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
>>>>>>> Huynh_develop
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

<<<<<<< HEAD
            </Card>
            <Card>
                <Row>
                    <Col span={12}>
                        <Button className={styles.buttonAll} icon={<UnorderedListOutlined />} onClick={() => handleTrangThai('')}>Tất cả</Button>
                        <Button className={styles.buttonAllYellow} icon={<ReloadOutlined />} onClick={() => handleTrangThai('1')}>Chờ xác nhận</Button>
                        <Button className={styles.buttonAllGreen} icon={<ClockCircleOutlined />} onClick={() => handleTrangThai('2')}>Đang xử lý</Button>
                        <Button className={styles.buttonAllDone} icon={<CheckOutlined />} onClick={() => handleTrangThai('0')}>Hoàn thành</Button>
                        <Button className={styles.buttonAllRed} icon={<CloseOutlined />} onClick={() => handleTrangThai('-1')}>Đã hủy</Button>
                    </Col>
                    <Col span={12}> <SearchForm onSubmit={handleSearchChange} /></Col>
                </Row>
                <Table
                    size="middle"
                    className="table table-striped"
                    scroll={{
                        x: 1000,
                        y: 630,
                    }}
                    rowKey={(record) => record.billDetailId}
                    columns={columns}
                    dataSource={billDetailsList}
                    pagination={false}
                />
                <Pagination
                    className={styles.pagination}
                    showSizeChanger
                    total={totalItem}
                    onChange={onChange}
                    defaultCurrent={1}
                    current={pageNum}
                    defaultPageSize={pageSize}
                />
            </Card>
=======
  useEffect(() => {
    reload();
  }, []);
>>>>>>> Huynh_develop

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
