import React, { Fragment, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, notification } from 'antd';
import typeAPI from '~/api/propertitesBalo/typeAPI';

function FormEditType(props) {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(true);
    const [idUpdate, setIdUpdate] = useState(props.type.id);
    const showComponent = () => {
        setOpen(true);
    };

    const closeComponent = () => {
        setOpen(false);
    };

    const updateFunction = async (id, typeName, typeStatus) => {
        setError(false);
        if (!error) {
            let update = { id, typeName, typeStatus };
            console.log(update.data);
            try {
                const response = await typeAPI.update(idUpdate, update);
                notification.success({
                    message: 'Cập nhật thành công',
                    description: 'Dữ liệu đã được cập nhật thành công',
                    duration: 2,
                });
                closeComponent();
            } catch (error) {
                console.log(error);
                setError(true);
                notification.error({
                    message: 'Cập nhật thất bại',
                    description: 'Dữ liệu không được cập nhật',
                    duration: 2,
                });
            };
        };
    };

    return (
        <Fragment>

            <div style={{ color: 'red' }}>
                <Button type="primary" className="btn btn-warning" onClick={showComponent} icon={<EditOutlined />}>
                    Edit
                </Button>

                <Drawer
                    title={'Edit - ' + props.type.id}
                    width={400}
                    onClose={closeComponent}
                    open={open} // Sửa thành visible
                    style={{
                        paddingBottom: 80,
                    }}
                    footer={
                        <Space>
                            <Button onClick={closeComponent}>Thoát</Button>
                            <Button onClick={updateFunction} onChange={() => setIdUpdate(props.type.id)} type="primary" className="btn btn-warning">
                                Lưu
                            </Button>
                        </Space>
                    }
                >

                    <Form layout="vertical" hideRequiredMark initialValues={props.type}
                    >
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item name="id" label="ID" style={{ color: "while", background: 'while' }}>
                                    <Input disabled style={{ color: "while", background: 'while' }} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="typeCode"
                                    label="Mã"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng điền Mã Kiểu',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Vui lòng điền Mã Kiểu" disabled />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="typeName"
                                    label="Tên"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng điền tên Kiểu',
                                        },
                                    ]}
                                >
                                    <Input name="typeName" placeholder="Vui lòng điền tên kiểu" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item name="typeStatus" label="Trạng Thái">
                                    <Select placeholder="Vui lòng chọn Trạng Thái">
                                        <Select.Option value='1'>Hoạt động</Select.Option>
                                        <Select.Option value='0'>Không hoạt động</Select.Option>
                                        <Select.Option value='-1'>Ngừng hoạt động</Select.Option>
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

export default FormEditType;