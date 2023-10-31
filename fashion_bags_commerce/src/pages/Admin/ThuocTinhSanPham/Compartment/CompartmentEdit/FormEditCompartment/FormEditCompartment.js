import React, { Fragment, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, notification } from 'antd';
import compartmentAPI from '~/api/propertitesBalo/compartmentAPI';

function FormEditCompartment(props) {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(props.compartment);
    const [stringStatus, setStringStatus] = useState("");

    const showComponent = () => {
        setOpen(true);
        if (data.compartmentStatus === 1) {
            setStringStatus("Hoạt động");
        } else if (data.compartmentStatus === -1) {
            setStringStatus("Ngừng hoạt động");
        } else {
            setStringStatus("Không hoạt động");
        }
    };

    const closeComponent = () => {
        setOpen(false);
    };

    const updateData = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };
    const updateStatus = (value) => {
        setData({ ...data, compartmentStatus: value });
    };

    const updateFunction = async (compartmentId, values) => {
        setError(false);
        let update = { ...values };
        if (!error) {
            try {
                await compartmentAPI.update(compartmentId, update);
                notification.success({
                    message: 'Cập nhật thành công',
                    description: 'Dữ liệu đã được cập nhật thành công',
                    duration: 2,
                });
                props.reload();
                closeComponent();
            } catch (error) {
                console.log(error);
                setError(true);
                notification.error({
                    message: 'Cập nhật thất bại',
                    description: 'Dữ liệu không được cập nhật',
                    duration: 2,
                });
            }
        }
    }

    return (
        <Fragment>
            <div style={{ color: 'red' }}>
                <Button type="primary" className="btn btn-warning" onClick={showComponent} icon={<EditOutlined />}>
                    Edit
                </Button>
                <Drawer
                    title={'Edit - ' + data.compartmentId}
                    width={400}
                    onClose={closeComponent}
                    open={open}
                    style={{
                        paddingBottom: 80,
                    }}
                    footer={
                        <Space>
                            <Button onClick={closeComponent}>Thoát</Button>
                            <Button onClick={() => updateFunction(data.compartmentId, data)} type="primary" className="btn btn-warning">
                                Lưu
                            </Button>
                        </Space>
                    }
                >
                    <Form layout="vertical" hideRequiredMark initialValues={data}>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="compartmentCode"
                                    label="Mã"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng điền mã ngăn',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Vui lòng điền mã ngăn" disabled />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="compartmentName"
                                    label="Tên"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng điền tên ngăn',
                                        },
                                    ]}
                                >
                                    <Input
                                        name="compartmentName"
                                        value={data.compartmentName}
                                        onChange={updateData}
                                        placeholder="Vui lòng điền tên ngăn"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item label="Trạng Thái">
                                    <Select
                                        onChange={updateStatus}
                                        defaultValue={stringStatus}
                                        placeholder="Vui lòng chọn Trạng Thái"
                                    >
                                        <Select.Option value="1">Hoạt động</Select.Option>
                                        <Select.Option value="0">Không hoạt động</Select.Option>
                                        <Select.Option value="-1">Ngừng hoạt động</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </div>
        </Fragment>
    );
}

export default FormEditCompartment;
