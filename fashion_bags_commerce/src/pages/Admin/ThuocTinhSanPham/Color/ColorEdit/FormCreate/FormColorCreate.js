//React Component
import React, { Fragment, useContext, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Popconfirm, Select, notification } from 'antd';
import Input from 'antd/es/input/Input';
//API
import colorAPI from '~/api/propertitesBalo/colorAPI';
// Utils
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';
//Function Component
function FormcolorEditTonggle(props) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);
  const [isPopconfirmVisible, setPopconfirmVisible] = useState(false);
  const [form] = Form.useForm();
  const showDrawer = () => {
    setOpen(true);
  };

  const onFinishFailed = (errorInfo) => {
    setError(true);
    const errorMessages = Object.values(errorInfo.errorFields)
      .map((field) => field.errors)
      .flat();
    notification.error({
      message: 'Lỗi',
      description: errorMessages.join('\n'), // Display error messages as a newline-separated string
      duration: 2,
    });
  };
  const onClose = () => {
    form.resetFields();
    setOpen(false);
  };
  const addFunc = async (values) => {
    setError(false);
    if (error == false) {
      let addcolor = { ...values, colorCode: generateCustomCode('col', 3) };
      try {
        const response = await colorAPI.add(addcolor);
        setPopconfirmVisible(false);
        notification.success({
          message: 'Thành Công',
          description: 'Dữ liệu đã được thêm!!!!',
          duration: 2,
        });
        onClose();
      } catch (error) {
        setError(true);
        notification.info({
          message: 'Lỗi',
          description: 'Vui lòng chọn xác nhận!!!',
          duration: 2,
        });
      }
    }
  };
  const onConfirm = () => {
    form.submit(); // Gọi hàm onFinish của Form khi xác nhận
    setPopconfirmVisible(false);
  };
  const onCancel = () => {
    setPopconfirmVisible(false); // Đóng Popconfirm sau khi xác nhận
  };
  return (
    <Fragment>
      <Button type="primary" onClick={showDrawer} style={{ width: '100px' }} icon={<PlusOutlined />}></Button>
      <Modal title="Thêm Màu Sắc" visible={open} onCancel={onClose} footer={null}>
        <div>
          <Form
            initialValues={{
              colorStatus: '1',
            }}
            form={form}
            name="basic"
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={addFunc}
          >
            <Form.Item
              label="Color Name"
              name="colorName"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền Tên color!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Status" name="colorStatus">
              <Select
                style={{ width: 300 }}
                placeholder="Vui lòng chọn trạng thái"
                options={[
                  {
                    value: '1',
                    label: 'Hoạt động',
                  },
                  {
                    value: '0',
                    label: 'Không Hoạt động',
                  },
                ]}
              />
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
export default FormcolorEditTonggle;
