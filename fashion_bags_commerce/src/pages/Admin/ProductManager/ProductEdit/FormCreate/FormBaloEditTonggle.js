//CSS
import './FormBaloEditTonggle.css';
//React Component
import React, { Fragment, useContext, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Popconfirm, Select, notification } from 'antd';
import Input from 'antd/es/input/Input';
//API
import baloAPI from '~/api/baloAPI';
// Utils
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';
//Function Component
function FormBaloEditTonggle(props) {
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
      let addBalo = { ...values, baloCode: generateCustomCode('baloCode', 9) };
      try {
        const response = await baloAPI.add(addBalo);
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
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Thêm Sản Phẩm
      </Button>
      <Modal title="Thêm Sản Phẩm" open={open} onOk={onClose} onCancel={onClose}>
        <div>
          <Form
            initialValues={{
              baloStatus: '1',
            }}
            form={form}
            name="basic"
            onFinish={addFunc}
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
          >
            <Form.Item
              label="Balo Name"
              name="baloName"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền Tên Balo!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Balo Status"
              name="baloStatus"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn trạng thái Balo!',
                },
              ]}
            >
              <Select
                style={{
                  width: 200,
                }}
                options={[
                  {
                    value: '1',
                    label: 'Hoạt Động',
                  },
                  {
                    value: '0',
                    label: 'Không Hoạt Động',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Popconfirm
                title="Xác Nhận"
                description="Bạn Có chắc chắn muốn Thêm?"
                okText="Đồng ý"
                cancelText="Không"
                onConfirm={onConfirm}
                onCancel={onCancel}
              >
                <Button type="primary" onClick={addFunc}>
                  Submit
                </Button>
              </Popconfirm>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </Fragment>
  );
}
export default FormBaloEditTonggle;
