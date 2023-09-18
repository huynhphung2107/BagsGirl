import '../FormEdit/FormProductEdit.css';

import React, { Fragment, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
function FormProductEdit(props) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <a type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Edit
      </a>
      <Drawer
        title={'Edit - ' + props.balo.code}
        width={360}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Edit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark initialValues={props.balo}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="code"
                label="Mã Code Balo "
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền Mã Code Balo',
                  },
                ]}
              >
                <Input placeholder="Vui lòng điền Mã Code Balo" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="name"
                    label="Tên "
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền tên Balo',
                      },
                    ]}
                  >
                    <Input value={'mkmxsimxs'} name="name" placeholder="Vui lòng điền Mã Code Balo" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="status"
                label="Trạng Thái Balo"
                rules={[
                  {
                    required: true,
                    message: 'Please select an owner',
                  },
                ]}
              >
                <Select placeholder="Vui lòng chọn Trạng Thái Balo">
                  <Option value="1">Hoạt Động</Option>
                  <Option value="0">Không Hoạt Động</Option>
                  <Option value="-1">Hủy Hoạt Động</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </Fragment>
  );
}
export default FormProductEdit;