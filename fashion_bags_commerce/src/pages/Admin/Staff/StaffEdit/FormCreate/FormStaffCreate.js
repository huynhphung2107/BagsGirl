import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, notification, Modal, Popconfirm, Input, Select, DatePicker, Radio } from 'antd';
import { timers } from 'jquery';
import React, { Component, Fragment, useState, useEffect, initialValue } from 'react';
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';
import staffAPI from '~/api/staffAPI';

function FormStaffCreate(props) {
  const [modalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(true);
  const [form] = Form.useForm();
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addFunc = async (values) => {
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

        handleCancel();

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
      <Button type="primary" onClick={showModal} icon={<PlusOutlined />}>
        Thêm nhân viên
      </Button>
      <br></br>
      <Modal title="Thêm Nhân viên" open={modalOpen} onCancel={handleCancel} footer={null}>
        <div>
          <Form
            form={form}
            labelCol={{
              span: 8,
            }}
            style={{
              maxWidth: 600,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={addFunc} // Xử lý khi submit form
          >
            <Form.Item
              label="Họ và tên"
              name={['userInfo', 'fullName']}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền thông tin!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Account"
              name={['userInfo', 'account']}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền thông tin!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name={['userInfo', 'password']}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền thông tin!',
                },
              ]}
            >
              <Input type="password" />
            </Form.Item>

            <Form.Item
              label="Email"
              name={['userInfo', 'email']}
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền thông tin!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Giới tính" name={['userInfo', 'gender']}>
              <Radio.Group defaultValue={true}>
                <Radio value={true}>Nam</Radio>
                <Radio value={false}>Nữ</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Role" name={['userInfo', 'userRole','roleName']} initialValue={initialValue}>
              <Select placeholder="Select a role" loading={loading}>
                {roles.map((role) => (
                  <Select.Option key={role.id} value={role.id}>
                    {role.roleName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <div style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </Fragment>
  );
}

export default FormStaffCreate;
