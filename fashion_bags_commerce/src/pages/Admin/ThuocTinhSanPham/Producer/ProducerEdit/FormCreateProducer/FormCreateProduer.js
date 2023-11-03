import React, { Fragment, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Select, notification } from 'antd';
import Input from 'antd/es/input/Input';
import producerAPI from '~/api/propertitesBalo/producerAPI';
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';

function FormProducerCreate(props) {
  const [openComponent, setOpenComponent] = useState(false);
  const [error, setError] = useState(true);
  const [form] = Form.useForm();

  const showComponent = function () {
    setOpenComponent(true);
  };

  const closeComponent = function () {
    setOpenComponent(false);
  };

  const addFuncion = async (values) => {
    setError(false);
    if (!error) {
      let add = { ...values, producerCode: generateCustomCode('producer', 3) };
      try {
        await producerAPI.add(add);
        notification.success({
          message: 'Thêm thành công',
          description: 'Nhà sản xuất được thêm thành công', // hiển thị thông báo
          duration: 2, // hiển thị 2 giây trước khi mất
        });
        closeComponent();
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
      <Button type="primary" onClick={showComponent} style={{ width: '100px' }} icon={<PlusOutlined />}></Button>
      <br />
      <Modal title="Thêm nhà sản xuất" open={openComponent} onCancel={closeComponent} footer={null}>
        <div>
          <Form
            form={form}
            labelCol={{ span: 8 }}
            style={{ maxWidth: 600 }}
            wrapperCol={{ span: 16 }}
            autoComplete="on"
            onFinish={addFuncion} // xử lí khi submit form
          >
            <Form.Item
              label="Tên nhà sản xuất"
              name="producerName"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền tên nhà sản xuất!',
                },
              ]}
            >
              <Input></Input>
            </Form.Item>

            <Form.Item
              label="Trạng thái"
              name="producerStatus"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng chọn trạng thái!',
                },
              ]}
            >
              <Select
                placeholder="Vui lòng chọn trạng thái"
                style={{ width: 250 }}
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
              ></Select>
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
export default FormProducerCreate;
