import React, { Fragment, useState } from 'react';
import { EyeFilled, EyeInvisibleOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Radio, Row, Select, Space, notification } from 'antd';
import staffAPI from '~/api/staffAPI';

function FormStaffEdit(props) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [stringStatus, setStringStatus] = useState('');
  const [data, setData] = useState({
    staffId: props.staffData.staffId,
    staffStatus: props.staffData.staffStatus,
    usersFullName: props.staffData.users.fullName,
    usersAccount: props.staffData.users.account,
    usersPassword: props.staffData.users.password,
    usersEmail: props.staffData.users.email,
    usersGender: props.staffData.users.gender,
    usersPhoneNumber: props.staffData.users.phoneNumber,
    usersAddress: props.staffData.users.address,
    usersUserNote: props.staffData.users.userNote,
    usersRolesRoleId: props.staffData.users.roles.roleId,
  });

  const showDrawer = () => {
    setOpen(true);
    if (data.staffStatus === 1) {
      setStringStatus('Hoạt động');
    } else if (data.staffStatus === -1) {
      setStringStatus('Ngừng hoạt động');
    } else {
      setStringStatus('Không hoạt động');
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
    setData({ ...data, staffStatus: value });
  };
  const updateGender = (value) => {
    setData({ ...data, usersGender: value });
  };

  const updateFunction = async (staffId, values) => {
    setError(false);
    if (!error) {
      let update = { ...values };
      try {
        await staffAPI.update(staffId, update);
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
        Edit
      </Button>
      <Drawer
        title={'Update tài khoản nhân viên có id: ' + data.staffId}
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
            <Button onClick={() => updateFunction(data.staffId, data)} type="primary" className="btn btn-warning">
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
                <Input
                  name="usersFullName"
                  value={data.usersFullName}
                  onChange={updateData}
                  placeholder="Please enter user name"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Trạng Thái">
                <Select onChange={updateStatus} defaultValue={stringStatus} placeholder="Vui lòng chọn Trạng Thái">
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
                <Input
                  name="usersAccount"
                  value={data.usersAccount}
                  onChange={updateData}
                  placeholder="Please enter account"
                />
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
                  iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeFilled />)}
                />
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
                  placeholder="Please enter email"
                />
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
                <Input
                  name="usersPhoneNumber"
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
                  placeholder="Please enter địa chỉ"
                />
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
            {/* <Col span={12}>
              <Form.Item label="Chức vụ">
                <Select onChange={updateStatus} defaultValue={stringStatus} placeholder="Vui lòng chọn Trạng Thái">
                  <Select.Option value="nv">Nhân viên</Select.Option>
                  <Select.Option value="admin">Quản lý</Select.Option>
                </Select>
              </Form.Item>
            </Col> */}
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
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </Fragment>
  );
}
export default FormStaffEdit;
