import React, { Fragment, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Modal, Select, notification } from 'antd';
import Input from 'antd/es/input/Input';
import typeAPI from '~/api/propertitesBalo/typeAPI';
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';

function FormTypeCreate(props) {
  const [openComponent, setOpenComponent] = useState(false);
  const [error, setError] = useState(true);
  const [form] = Form.useForm();

  const showComponent = function () {
    setOpenComponent(true);
  };

  const handleCancel = function () {
    setOpenComponent(false);
  };

  const addFuncion = async (values) => {
    setError(false);
    if (!error) {
      let add = { ...values, typeCode: generateCustomCode('type', 3) };
      console.log(add);
      try {
        await typeAPI.add(add);
        notification.success({
          message: 'Thêm thành công',
          description: 'Dữ liệu được thêm thành công', // hiển thị thông báo
          duration: 2, // hiển thị 2 giây trước khi mất
        });
        handleCancel();
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
      <Button type="primary" onClick={showComponent} style={{ width: '100px' }} icon={<PlusOutlined />}>
        {' '}
      </Button>
      <Modal title="Thêm kiểu balo" open={openComponent} onCancel={handleCancel} footer={null}>
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
              label="Tên kiểu"
              name="typeName"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền Tên kiểu!',
                },
              ]}
            >
              <Input></Input>
            </Form.Item>

            <Form.Item
              label="Trạng thái"
              name="typeStatus"
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
export default FormTypeCreate;
