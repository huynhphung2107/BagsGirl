import React, { useState, useEffect, Fragment } from 'react';
import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import voucherAPI from '~/api/voucherAPI';
import { DeleteOutlined, ReloadOutlined, SyncOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import FormVoucherCreate from '../../VoucherEdit/FormrCreate/FormVoucherCreate';
// import FormvoucherEdit from '../../voucherEdit/FormEdit/FormvoucherEdit';
const TableContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesSize, setPagesSize] = useState(15);
  const [totalItem, setTotalItem] = useState();

  const onCancel = () => {};
  const reload = () => {
    setLoading(true);
    getAll(currentPage, pagesSize);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    // Fetch voucher data using the voucherAPI.getAll function
    getAll(currentPage, pagesSize);
    reload();
  }, []); // Update data when page or page size changes

  const onChange = (current, pageSize) => {
    console.log(current);
    console.log(pageSize);
    setCurrentPage(current);
    setPagesSize(pageSize);
    getAll(current, pageSize);
  };

  const getAll = async (current, pageSize) => {
    try {
      const response = await voucherAPI.getAll(current, pageSize);
      const data = response.data.content;
      console.log(data);
      setTotalItem(response.data.totalElements);
      setData(data);
    } catch (error) {}
  };

  // Define your table columns
  const columns = [
    {
      title: 'STT',
      width: 50,
      render: (text, record, index) => <span>{(currentPage - 1) * pagesSize + index + 1}</span>,
    },
    {
      title: 'Code',
      dataIndex: 'voucherCode',
      sorter: (a, b) => a.voucherCode.localeCompare(b.voucherCode),
      width: 100,
    },
    {
      title: 'Name voucher',
      dataIndex: 'voucherName',
      width: 100,
      sorter: (a, b) => a.voucherName.localeCompare(b.voucherName),
    },
    {
      title: 'Giảm giá',
      dataIndex: 'discountPrice',
      width: 100,
      sorter: (a, b) => a.voucherName.localeCompare(b.voucherName),
    },
    {
      title: 'Kiểu voucher',
      dataIndex: 'voucherType',
      width: 100,
      sorter: (a, b) => a.voucherName.localeCompare(b.voucherName),
    },
    {
      title: 'Điểm tối thiểu',
      dataIndex: 'pointsToReceive',
      width: 100,
      sorter: (a, b) => a.voucherName.localeCompare(b.voucherName),
    },
    {
      title: 'Thời gian bắt đầu',
      dataIndex: 'voucherStartTime',
      width: 150,
      sorter: (a, b) => a.voucherName.localeCompare(b.voucherName),
    },
    {
      title: 'Thời gian kết thúc',
      dataIndex: 'voucherEndTime',
      width: 150,
      sorter: (a, b) => a.voucherName.localeCompare(b.voucherName),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'voucherStatus',

      width: 150,
      sorter: (a, b) => a.voucherStatus.localeCompare(b.voucherStatus),
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
          {/* <FormvoucherEdit voucher={record} /> */}
          <Popconfirm
            title="Xác Nhận"
            description="Bạn Có chắc chắn muốn xóa?"
            okText="Đồng ý"
            cancelText="Không"
            onConfirm={() => {
              deleteHandle(record.id, 0);
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

  const deleteHandle = async (id, status) => {
    const xoa = await voucherAPI.updateStatus(id, status);
    notification.info({
      message: 'Thông báo',
      description: 'Đã hủy thành công trạng thái của voucher có id là :' + id,
    });
    getAll(currentPage, pagesSize);
    console.log(xoa);
  };

  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <FormVoucherCreate />
      <Button icon={<ReloadOutlined />} onClick={reload} loading={loading}></Button>
      <Table
        className="table table-striped"
        scroll={{
          x: 1000,
          y: 650,
        }}
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={data}
        pagination={false}
        // onChange={handlePageChange} // Handle page changes
      />

      <Pagination
        className={styles.pagination}
        total={totalItem}
        onChange={onChange}
        defaultCurrent={1}
        defaultPageSize={pagesSize}
      />
    </div>
  );
};

export default TableContent;
