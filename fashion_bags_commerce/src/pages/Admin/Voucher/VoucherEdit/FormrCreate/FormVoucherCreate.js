import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, notification, Modal, Popconfirm, Input, Select, DatePicker } from 'antd';
import { timers } from 'jquery';
import React, { Component, Fragment, useState } from 'react';
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';
import voucherAPI from '~/api/voucherAPI';

function FormVoucherCreate(props) {
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
      let add = { ...values, voucherCode: generateCustomCode('vc', 3) };
      try {
        const response = await voucherAPI.add(add);
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

  return (
    <Fragment>
      <Button type="primary" onClick={showModal} icon={<PlusOutlined />}>
        Thêm Voucher
      </Button>
      <br></br>
      <Modal title="Thêm voucher" open={modalOpen} onCancel={handleCancel} footer={null}>
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
              label="Voucher Name"
              name="voucherName"
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
              label="Giảm giá"
              name="discountPrice"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền thông tin!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item label="Ngày tạo" name="voucherCreateDate">
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>

            <Form.Item label="Ngày băt đầu" name="voucherStartTime">
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>

            <Form.Item label="Ngày kết thúc" name="voucherEndTime">
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>


            <Form.Item label="Kiểu voucher" name="voucherType">
              <Select
                style={{ width: 300 }}
                placeholder="Vui lòng chọn trạng thái"
                options={[
                  {
                    value: 'giam truc tiep',
                    label: 'Giảm trực tiếp',
                  },
                  {
                    value: 'giam online',
                    label: 'Giảm online',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              label="Điểm tối thiểu"
              name="pointsToReceive"
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
              label="Số lượng"
              name="voucherAmount"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền thông tin!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Hình thức thanh toán" name="paymentType">
              <Select
                style={{ width: 300 }}
                placeholder="Vui lòng chọn trạng thái"
                options={[
                  {
                    value: 'trực tiếp',
                    label: 'Trực Tiếp',
                  },
                  {
                    value: 'online',
                    label: 'Online',
                  },
                ]}
              />
            </Form.Item>

            <Form.Item label="Status" name="voucherStatus">
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

export default FormVoucherCreate;
