import React, { useState, useEffect } from 'react';
import { Button, Pagination, Popconfirm, Space, Table, notification } from 'antd';
import userInfoAPI from '~/api/userInfoAPI';
import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';
const TableContent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagesSize, setPagesSize] = useState(5);
    const [totalItem, setTotalItem] = useState();



    const onCancel = () => { };
    const reload = () => {
        setLoading(true);
        getAll(currentPage, pagesSize);
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
    useEffect(() => {
        getAll(currentPage, pagesSize);
        // }, []);
    });

    const onChange = (current, pageSize) => {
        setCurrentPage(current);
        setPagesSize(pageSize);
        getAll(current, pageSize);
    };

    const getAll = async (current, pageSize) => {
        try {
            const response = await userInfoAPI.getAllPhanTrang(current, pageSize);
            const data = response.data.content;
            setTotalItem(response.data.totalElements);
            setData(data);
        } catch (error) { }
    };

    // Define your table columns
    const columns = [
        {
            title: 'STT',
            width: 100,
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Họ và tên',
            dataIndex: 'fullName',
            sorter: (a, b) => a.fullName.localeCompare(b.fullName),
            width: 100,
        },
        {
            title: 'Tài khoản',
            dataIndex: 'account',
            sorter: (a, b) => a.account.localeCompare(b.account),
            width: 100,
        },
        {
            title: 'SĐT',
            dataIndex: 'phoneNumber',
            sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
            width: 100,
        },

        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
            width: 100,
        },

        {
            title: 'Giới tính',
            dataIndex: 'gender',
            width: 100,
            render: (gender) => {
                return gender ? 'Nam' : 'Nữ';
            },
        },

        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            sorter: (a, b) => a.address.localeCompare(b.address),
            width: 100,
        },

        {
            title: 'Chức vụ',
            dataIndex: ['userRole', 'roleName'],
            sorter: (a, b) => a.userRole.roleName.localeCompare(b.userRole.roleName),
            width: 100,
        },
        {
            title: 'Ghi chú',
            dataIndex: 'note',
            sorter: (a, b) => a.note.localeCompare(b.note),
            width: 100,

        },

        {
            title: 'Trạng thái',
            dataIndex: 'userInfoStatus',

            width: 150,
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
                    {/* <FormStaffViewDetails id={record.id} /> */}
                    <Popconfirm
                        title="Xác nhận"
                        description="Bạn có chắc chắn muốn xóa?"
                        okText="Đồng ý"
                        cancelText="Không"
                        onConfirm={() => {
                            deleteHandle(record.id, 0);
                            reload();
                        }}
                        onCancel={onCancel}
                    >
                        <Button className="btn btn-danger "
                            icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),

            width: 100,
        },
    ];

    const deleteHandle = async (id, status) => {
        const xoa = await userInfoAPI.updateStatus(id, status);
        notification.info({
            message: 'Thông báo',
            description: 'Đã xóa thành công người dùng có id là:' + id,
        });
        getAll(currentPage, pagesSize);
        console.log(xoa);
    };

    return (
        <div style={{ padding: '10px', }}>
            <div style={{ marginBottom: 16, }} >
                <Button type="" onClick={reload} loading={loading} icon={<SyncOutlined />}> Reload </Button>
                <span style={{ marginLeft: 8, }} ></span>
            </div>
            <Table
                rowKey={(record) => record.id}
                columns={columns}
                dataSource={data}
                pagination={false}
                // onChange={handlePageChange} // Handle page changes
                loading={loading}
            />
            <Pagination total={totalItem} onChange={onChange} defaultCurrent={1} defaultPageSize={pagesSize} />
        </div>
    );
};

export default TableContent;

