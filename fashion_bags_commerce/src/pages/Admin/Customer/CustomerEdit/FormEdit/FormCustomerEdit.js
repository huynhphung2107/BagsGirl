import React, { Fragment, useState, useEffect, initialValue } from 'react';
import { EyeFilled, EyeInvisibleOutlined, EditOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, Radio, notification } from 'antd';
import customerAPI from '~/api/customerAPI';

const { Option } = Select;
function FormCustomerEdit(props) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);
  const [form] = Form.useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  // With this line to set the initial values
  const [data, setData] = useState(props.customerData);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const updateFunction = async (customerId, values) => {
    console.log(values);
    setError(false);
    if (!error) {
      let update = { ...values };
      try {
        const response = await customerAPI.updateFunction(customerId, update);
        notification.success({
          message: 'Update thành công',
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
      const response = await customerAPI.getRoles(); // Replace with your actual API endpoint
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <Fragment>
      <Button type="primary" className="btn btn-warning" onClick={showDrawer} icon={<EditOutlined />}>
        Edit
      </Button>
      <Drawer
        title={'Update tài khoản khách hàng có id: ' + data.customerId}
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
            <Button onClick={update} htmlType="submit">
              Submit
            </Button> */}
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark initialValues={data} onFinish={updateFunction}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name={['users', 'fullName']}
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
                name="customerStatus"
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
                name={['users', 'account']}
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
                name={['users', 'password']}
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
                name={['users', 'email']}
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
                name={['users', 'phoneNumber']}
                label="SĐT"
                rules={[
                  {
                    required: true,
                    message: 'Please enter number phone',
                  },
                ]}
              >
                <Input placeholder="Please enter number phone" type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name={['users', 'address']}
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
              <Form.Item label="Giới tính" name={['users', 'gender']}>
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
                <Select placeholder="Select a Role" loading={loading}>
                  {roles.map((role) => (
                    <Select.Option key={role.roleId} value={role.roleId}>
                      {role.roleName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="customerPoint"
                label="Điểm"
                rules={[
                  {
                    required: true,
                    message: 'Please enter điểm',
                  },
                ]}
              >
                <Input placeholder="Please enter number phone" type="number" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name={['users', 'userNote']}
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
            <Button type="primary" htmlType="submit" icon={<CheckOutlined />}>
              Submit
            </Button>
          </div>
        </Form>
      </Drawer>
    </Fragment>
  );
}
export default FormCustomerEdit;
