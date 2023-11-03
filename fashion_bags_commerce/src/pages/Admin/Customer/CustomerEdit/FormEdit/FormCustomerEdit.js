import React, { Fragment, useState } from 'react';
import { EyeFilled, EyeInvisibleOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Radio, Row, Select, Space, notification } from 'antd';
import customerAPI from '~/api/customerAPI';

function FormCustomerEdit(props) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [stringStatus, setStringStatus] = useState("");
  const [data, setData] = useState({
    customerId: props.customerData.customerId,
    customerStatus: props.customerData.customerStatus,
    customerPoint: props.customerData.customerPoint,
    usersFullName: props.customerData.users.fullName,
    usersAccount: props.customerData.users.account,
    usersPassword: props.customerData.users.password,
    usersEmail: props.customerData.users.email,
    usersGender: props.customerData.users.gender,
    usersPhoneNumber: props.customerData.users.phoneNumber,
    usersAddress: props.customerData.users.address,
    usersUserNote: props.customerData.users.userNote,
    usersRolesRoleId: props.customerData.users.roles.roleId,
  });

  const showDrawer = () => {
    setOpen(true);
    if (data.customerStatus === 1) {
      setStringStatus("Hoạt động");
    } else if (data.customerStatus === -1) {
      setStringStatus("Ngừng hoạt động");
    } else {
      setStringStatus("Không hoạt động");
    }
  };
  const onClose = () => {
    setOpen(false);
  };

  const updateData = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const updateStatus = (value) => {
    setData({ ...data, customerStatus: value });
  };
  const updateGender = (value) => {
    setData({ ...data, usersGender: value });
  };

  const updateFunction = async (customerId, values) => {
    setError(false);
    if (!error) {
      let update = { ...values };
      try {
        await customerAPI.update(customerId, update);
        notification.success({
          message: 'Update thành công',
          description: 'Dữ liệu đã được thêm thành công',
          duration: 2,
        });
        props.reload();
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

  return (
    <Fragment>
      <Button type="primary" className="btn btn-warning" onClick={showDrawer} icon={<EditOutlined />}>
       
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
            <Button onClick={onClose}>Thoát</Button>
            <Button onClick={() => updateFunction(data.customerId, data)} type="primary" className="btn btn-warning">
              Lưu
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark initialValues={data}>
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
                <Input name="usersFullName" value={data.usersFullName} onChange={updateData} placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
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
                <Input name="usersAccount" value={data.usersAccount} onChange={updateData} placeholder="Please enter account" />
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
                <Input.Password
                  name="usersPassword"
                  value={data.usersPassword}
                  onChange={updateData}
                  iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeFilled />)} />
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
                <Input
                  name="usersEmail"
                  value={data.usersEmail}
                  onChange={updateData}
                  placeholder="Please enter email" />
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
                <Input name="usersPhoneNumber"
                  value={data.usersPhoneNumber}
                  onChange={updateData}
                  placeholder="Please enter number phone"
                />
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
                <Input
                  name="usersAddress"
                  value={data.usersAddress}
                  onChange={updateData}
                  placeholder="Please enter địa chỉ" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Giới tính" name="usersGender">
                <Radio.Group onChange={(e) => updateGender(JSON.parse(e.target.value))}>
                  <Radio value={true}>Nam</Radio>
                  <Radio value={false}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
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
                <Input name="customerPoint" onChange={updateData} placeholder="Please enter number phone" type="number" />
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
                <Input.TextArea
                  name="usersUserNote"
                  value={data.usersUserNote}
                  onChange={updateData}
                  rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </Fragment>
  );
}
export default FormCustomerEdit;
