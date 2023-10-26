import React, { Fragment, useState, initialValue, useEffect } from 'react';
import { EditOutlined } from '@ant-design/icons';

import { Button, Col, Modal, Form, Input, Row, Select, Space, notification } from 'antd';
import brandAPI from '~/api/propertitesBalo/brandAPI';
// import styles from './FormBrandEdit.module.scss';

function FormBrandEdit(props) {
  const [modalOpen, setIsModalOpen] = useState(false);
  const [error, setErrorText] = useState(true);
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

  const updateFunc = async (props) => {
    console.log(props);
    setErrorText('');
    try {
      const response = await brandAPI.update(props);

      notification.success({
        message: 'Update thành công',
        description: 'Dữ liệu đã được cập nhật thành công',
        duration: 1,
      });

      return response.data;
    } catch (error) {
      const errorResponse = error.response;
      if (errorResponse) {
        setErrorText(errorResponse.data.message);
      } else {
        setErrorText('Có lỗi xảy ra khi gửi yêu cầu cập nhật.');
      }
      notification.error({
        message: 'Lỗi',
        description: error.toString(),
        duration: 2,
      });
      // console.log(error);

      console.log(error);
    }
  };

  return (
    <Fragment>
      <Button type="primary" onClick={showModal} icon={<EditOutlined />}>
        Edit
      </Button>
      <br></br>
      <Modal title={'Edit - ' + props.brand.brandName} open={modalOpen} onCancel={handleCancel} footer={null}>
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
            onFinish={updateFunc} // Xử lý khi submit form
            initialValues={props.brand}
          >
            <Form.Item
              label="Brand Name"
              name="brandName"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền Tên thương hiệu!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Status" name="brandStatus">
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
              <Button type="primary" onClick={updateFunc}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </Fragment>
  );
}

export default FormBrandEdit;
