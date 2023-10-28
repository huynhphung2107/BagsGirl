import { Button, Pagination, Popconfirm, Space, Spin, Table, notification } from 'antd';
import { DeleteOutlined, SyncOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import buckleTypeAPI from '~/api/propertitesBalo/buckleTypeAPI';
import styles from './index.module.scss';
import FormEditBuckleType from '../../BuckleTypeEdit/FormEditBuckleType/FormEditBuckleType';

function TableContent() {
    const [buckleTypeList, setBuckleTypeList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalItem, setTotalItem] = useState();

    const handleTableChange = (pagination, filters, sorter) => {
    };
    const columns = [
        {
            title: "STT",
            width: 100,
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Tên kiểu khóa',
            dataIndex: 'buckleTypeName',
            width: 100,
            sorter: (a, b) => a.buckleTypeName.localeCompare(b.buckleTypeName),
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
                    <FormEditBuckleType buckleType={record} reload={() => setLoading(true)} />
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
                        <Button className="btn btn-danger " icon={<DeleteOutlined />}>
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
            width: 100,
        },
    ];
    const onCancel = () => { };
    const reload = () => {
        setLoading(true);
        getAllPhanTrangBuckleType(currentPage, pageSize);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const getAllPhanTrangBuckleType = async (pageNum, pageSize) => {
        try {
            const response = await buckleTypeAPI.getAllPhanTrang(pageNum, pageSize);
            const data = response.data.content;
            setTotalItem(response.data.totalElements);
            setBuckleTypeList(data);
            setTimeout(() => { }, 300);
        } catch (error) {
            console.error('Đã xảy ra lỗi: ', error);
        }
    };
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if (loading) {
            // Tải lại bảng khi biến trạng thái thay đổi
            getAllPhanTrangBuckleType(currentPage, pageSize);
            setLoading(false); // Reset lại trạng thái
        }
    }, [loading]);

    const handleDeleteBuckleType = async (id, status) => {
        try {
            await buckleTypeAPI.updateStatus(id, status);
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
        getAllPhanTrangBuckleType(current, pageSize);
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
                <Button onClick={reload} loading={loading} icon={<SyncOutlined />}>
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
                    rowKey={(record) => record.buckleTypeId}
                    columns={columns}
                    dataSource={buckleTypeList}
                    onChange={handleTableChange}
                    pagination={false}
                    title={() => <div className="red-table-title">Danh sách kiểu khóa</div>}
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
