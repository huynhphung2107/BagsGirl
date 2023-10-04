import '../FormEdit/FormColorEdit.css';

import React, { Fragment, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
function FormColorEdit(props) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Button type="primary" className='btn btn-warning' onClick={showDrawer} icon={<EditOutlined />}>
       
      </Button>
      <Drawer
        title={'Edit - ' + props.color.colorCode}
        width={360}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary" className='btn btn-warning'>
              Edit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark initialValues={props.color}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="colorCode"
                label="Mã Code Color "
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền Mã Code Color',
                  },
                ]}
              >
                <Input placeholder="Vui lòng điền Mã Code Color" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="colorName"
                    label="Tên "
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền tên Color',
                      },
                    ]}
                  >
                    <Input name="colorName" placeholder="Vui lòng điền Mã Code Color" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </Fragment>
  );
}
export default FormColorEdit;
