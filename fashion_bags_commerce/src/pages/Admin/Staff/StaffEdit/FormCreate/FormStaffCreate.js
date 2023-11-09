import React, { Fragment, useState, useEffect, initialValue } from 'react';
import { EyeFilled, EyeInvisibleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, Radio, notification, Tooltip } from 'antd';
import staffAPI from '~/api/staffAPI';
import { data } from 'jquery';

const { Option } = Select;
const FormStaffCreate = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);
  const [form] = Form.useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const addFunc = async (values) => {
    console.log(values);
    setError(false);
    if (!error) {
      let add = { ...values };
      try {
        const response = await staffAPI.add(add);
        notification.success({
          message: 'Add thành công',
          description: 'Dữ liệu đã được thêm thành công',
          duration: 2,
        });

        onClose();

        // Đóng Modal sau khi thêm thành công
      } catch (error) {
        setError(true);
        notification.error({
          message: 'Lỗi',
          description: 'Vui lòng xác nhận',
          duration: 2,
        });
        console.log(error);
      }
    }
  };

  useEffect(() => {
    // Fetch the list of roles from your backend API
    fetchRolesFromAPI()
      .then((data) => {
        setRoles(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching roles:', error);
        setLoading(false);
      });
  }, []);

  // Replace this function with your actual API call to fetch roles
  const fetchRolesFromAPI = async () => {
    try {
      const response = await staffAPI.getRoles(); // Replace with your actual API endpoint
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <Fragment>
      {' '}
      <Tooltip title="Thêm mới nhân viên">
        <Button style={{ width: '100px' }} type="primary" onClick={showDrawer} icon={<PlusOutlined />}></Button>
      </Tooltip>
      <Drawer
        title="Thêm mới nhân viên"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        footer={
          <Space>
            {/* <Button onClick={onClose}>Cancel</Button>
            <Button onClick={addFunc} htmlType="submit">
              Submit
            </Button> */}
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark initialValues={initialValue} onFinish={addFunc}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="usersFullName"
                label="Họ và tên"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="staffStatus"
                label="Trạng thái"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
              >
                <Select placeholder="Please choose the status">
                  <Option value="1">Hoạt động</Option>
                  <Option value="0">Không Hoạt động</Option>
                  <Option value="-1">Ngừng Hoạt động</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="usersAccount"
                label="Tài khoản"
                rules={[
                  {
                    required: true,
                    message: 'Please enter account',
                  },
                ]}
              >
                <Input placeholder="Please enter account" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Password"
                name="usersPassword"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền thông tin!',
                  },
                ]}
              >
                <Input.Password iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeFilled />)} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="usersEmail"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter email',
                  },
                ]}
              >
                <Input placeholder="Please enter email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="usersPhoneNumber"
                label="SĐT"
                rules={[
                  {
                    required: true,
                    message: 'Please enter number phone',
                  },
                ]}
              >
                <Input placeholder="Please enter number phone" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="usersAddress"
                label="Địa chỉ"
                rules={[
                  {
                    required: true,
                    message: 'Please enter địa chỉ',
                  },
                ]}
              >
                <Input placeholder="Please enter địa chỉ" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Giới tính" name="usersGender">
                <Radio.Group>
                  <Radio value={true}>Nam</Radio>
                  <Radio value={false}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Role" name="usersRolesRoleId" initialValue={initialValue}>
                <Select placeholder="Select a role" loading={loading}>
                  {roles.map((role) => (
                    <Select.Option key={role.roleId} value={role.roleId}>
                      {role.roleName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="usersUserNote"
                label="Note"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
          <div>
            <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
              Submit
            </Button>
          </div>
        </Form>
      </Drawer>
    </Fragment>
  );
};
export default FormStaffCreate;
