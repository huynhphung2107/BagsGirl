import React, { Fragment, useState, useEffect } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, notification } from 'antd';
import sizeAPI from '~/api/propertitesBalo/sizeAPI';

function FormSizeEdit(props) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(props.size);
  const [stringStatus, setStringStatus] = useState('');

  const showComponent = () => {
    setOpen(true);
    if (data.sizeStatus === 1) {
      setStringStatus('Hoạt động');
    } else if (data.sizeStatus === -1) {
      setStringStatus('Ngừng hoạt động');
    } else {
      setStringStatus('Không hoạt động');
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
    setData({ ...data, sizeStatus: value });
  };

  const updateFunction = async (sizeId, values) => {
    setError(false);
    let update = { ...values };
    console.log(sizeId);
    console.log(update);
    if (!error) {
      try {
        await sizeAPI.update(sizeId, update);
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
      }
    }
  };

  return (
    <Fragment>
      <div style={{ color: 'red' }}>
        <Button type="primary" className="btn btn-warning" onClick={showComponent} icon={<EditOutlined />}>
          Edit
        </Button>
        <Drawer
          title={'Edit - ' + data.sizeName}
          width={400}
          onClose={closeComponent}
          open={open}
          style={{
            paddingBottom: 80,
          }}
          extra={
            <Space>
              <Button onClick={closeComponent}>Thoát</Button>
              <Button onClick={() => updateFunction(data.sizeId, data)} type="primary" className="btn btn-warning">
                Lưu
              </Button>
            </Space>
          }
        >
          <Form layout="vertical" hideRequiredMark initialValues={data}>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="sizeCode"
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
                  name="sizeName"
                  label="Tên"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng điền tên Kiểu',
                    },
                  ]}
                >
                  <Input
                    name="sizeName"
                    value={data.sizeName}
                    onChange={updateData}
                    placeholder="Vui lòng điền tên kiểu"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Trạng Thái">
                  <Select onChange={updateStatus} defaultValue={stringStatus} placeholder="Vui lòng chọn Trạng Thái">
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

export default FormSizeEdit;
