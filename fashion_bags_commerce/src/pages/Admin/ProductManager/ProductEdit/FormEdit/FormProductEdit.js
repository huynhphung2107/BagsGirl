
import React, { Fragment, useState } from 'react';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
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
      <Button className="btn btn-warning" onClick={showDrawer} icon={<EditOutlined />}></Button>
      <Drawer
        title={'Edit - ' + props.balo.baloCode}
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
                name="baloCode"
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
                    name="baloName"
                    label="Tên "
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền tên Balo',
                      },
                    ]}
                  >
                    <Input name="baloName" placeholder="Vui lòng điền Mã Code Balo" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="baloStatus"
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
