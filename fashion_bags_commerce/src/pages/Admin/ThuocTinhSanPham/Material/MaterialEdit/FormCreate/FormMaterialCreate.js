import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, notification, Modal, Popconfirm, Input, Select } from 'antd';
import React, { Component, Fragment, useState } from 'react';
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';
import materialAPI from '~/api/propertitesBalo/materialAPI';

function FormMaterialCreate(props) {
  const [modalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(true);
  const [form] = Form.useForm();

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
      let add = { ...values, materialCode: generateCustomCode('mat', 3) };
      try {
        const response = await materialAPI.add(add);
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
      }
    }
  };

  return (
    <Fragment>
      <Button type="primary" onClick={showModal} style={{ width: '100px' }} icon={<PlusOutlined />}></Button>
      <br></br>
      <Modal title="Thêm chất liệu" open={modalOpen} onCancel={handleCancel} footer={null}>
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
              label=" Name"
              name="materialName"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền Tên chất liệu!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Status" name="materialStatus">
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

export default FormMaterialCreate;
