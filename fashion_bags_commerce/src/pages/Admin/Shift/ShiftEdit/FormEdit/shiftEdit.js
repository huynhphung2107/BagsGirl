import '../FormEdit/shiftEdit.css';

import React, { Fragment, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
const { Option } = Select;
function ShiftEdit(props) {
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
        title={'Edit - ' + props.shift.code}
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
        <Form layout="vertical" hideRequiredMark initialValues={props.shift}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="code"
                label="Mã Code shift "
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền Mã Code Shift',
                  },
                ]}
              >
                <Input placeholder="Vui lòng điền Mã Code Shift" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="startTime"
                    label="Start Time "
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền thời gian bắt đầu',
                      },
                    ]}
                  >
                    <Input value={'mkmxsimxs'} name="name" placeholder="Vui lòng điền thời gian bắt đầu" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="endTime"
                    label="End Time "
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền thời gian kết thúc',
                      },
                    ]}
                  >
                    <Input value={'mkmxsimxs'} name="name" placeholder="Vui lòng điền thời gian kết thúc" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="createBy"
                label="Tạo bởi "
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền người tạo',
                  },
                ]}
              >
                <Input placeholder="Vui lòng điền người tạo" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="status"
                label="Trạng Thái Ca làm việc"
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

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="note"
                label="Ghi Chú"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền ghi chú',
                  },
                ]}
              >
                <Input placeholder="Vui lòng điền ghi chú" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="staffUserInfoFullname"
                label="Nhân viên trực ca"
                rules={[
                  {
                    required: true,
                    message: 'Chọn',
                  },
                ]}
              >
                <Select placeholder="Chọn nhân viên">
                  <Option value="1">Nhân viên 1</Option>
                  <Option value="0">Nhân viên 2</Option>
                  <Option value="-1">Nhân viên 3</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>


        </Form>
      </Drawer>
    </Fragment>
  );
}
export default ShiftEdit;
