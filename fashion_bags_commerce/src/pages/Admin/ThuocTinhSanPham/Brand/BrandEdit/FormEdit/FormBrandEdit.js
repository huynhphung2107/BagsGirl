import React, { Fragment, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
<<<<<<< HEAD
import { Button, Col, Drawer, Option, Form, Input, Row, Select, Space, notification } from 'antd';
=======
import { Button, Col, Drawer, Form, Input, Row, Select, Space, notification } from 'antd';
>>>>>>> main
import brandAPI from '~/api/propertitesBalo/brandAPI';

function FormBrandEdit(props) {
  const [open, setOpen] = useState(false);
  const [errorText, setErrorText] = useState('');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const updateFunc = async (values) => {
<<<<<<< HEAD
    setError(false);
    if (!error) {
      let update = { ...values };
      try {
        const response = await brandAPI.update(update);
        notification.success({
          message: 'Update thành công',
          description: 'Dữ liệu đã được cập nhật thành công',
          duration: 2,
        });
        console.log(update)
        console.log(response)

        // Đóng Modal sau khi cập nhật thành công
        onClose();
      } catch (error) {
        setError(true);
        notification.error({
          message: 'Lỗi',
          description: 'Vui lòng xác nhận',
          duration: 2,
        });
=======
    setErrorText('');
    try {
      const response = await brandAPI.update(values);
      notification.success({
        message: 'Update thành công',
        description: 'Dữ liệu đã được cập nhật thành công',
        duration: 2,
      });
      // Loại bỏ dòng ghi log sau
      // console.log(update)
      // Loại bỏ dòng ghi log sau
      // console.log(response)
      onClose();
    } catch (error) {
      const errorResponse = error.response;
      if (errorResponse) {
        setErrorText(errorResponse.data.message);
      } else {
        setErrorText('Có lỗi xảy ra khi gửi yêu cầu cập nhật.');
>>>>>>> main
      }
      notification.error({
        message: 'Lỗi',
        description: errorText,
        duration: 2,
      });
      console.log(error);
    }
  };
<<<<<<< HEAD


  return (
    <Fragment >

      <div style={{ color: 'red' }}>
        <Button type="primary" className="btn btn-warning" onClick={showDrawer} icon={<EditOutlined />}>
          Edit
        </Button>

=======
  return (
    <Fragment>
      <div style={{ color: 'red' }}>
        <Button type="primary" className="btn btn-warning" onClick={showDrawer} icon={<EditOutlined />}>
          Edit
        </Button>

>>>>>>> main
        <Drawer
          title={'Edit - ' + props.brand.brandCode}
          width={400}
          onClose={onClose}
<<<<<<< HEAD
          open={open} // Sửa thành visible
          style={{
=======
          open={open}
          bodyStyle={{
>>>>>>> main
            paddingBottom: 80,
          }}
          footer={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={updateFunc} type="primary" className="btn btn-warning">
                Edit
              </Button>
            </Space>
          }
        >
<<<<<<< HEAD
          <Form layout="vertical" hideRequiredMark initialValues={props.brand}

          >
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="brandCode"
                  label="Mã Code brand"

                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng điền Mã Code brand',
                    },
                  ]}
                >
                  <Input placeholder="Vui lòng điền Mã Code brand" disabled />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="brandName"
                  label="Tên"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng điền tên brand',
                    },
                  ]}
                >
                  <Input name="brandName" placeholder="Vui lòng điền Mã Code brand" />
                </Form.Item>
              </Col>
            </Row>

=======
          <Form layout="vertical" hideRequiredMark initialValues={props.brand}>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="brandCode"
                  label="Mã Code brand"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng điền Mã Code brand',
                    },
                  ]}
                >
                  <Input placeholder="Vui lòng điền Mã Code brand" disabled />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="brandName"
                  label="Tên"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng điền tên brand',
                    },
                  ]}
                >
                  <Input name="brandName" placeholder="Vui lòng điền Mã Code brand" />
                </Form.Item>
              </Col>
            </Row>

>>>>>>> main
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="brandStatus"
                  label="Trạng Thái Brand"
<<<<<<< HEAD
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please select an owner',
                //   },
                // ]}
=======
>>>>>>> main
                >
                  <Select placeholder="Vui lòng chọn Trạng Thái Brand">
                    <Select.Option value='1'>Hoạt động</Select.Option>
                    <Select.Option value='0'>Không hoạt động</Select.Option>
                    <Select.Option value='-1'>Ngừng hoạt động</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </div>
    </Fragment>
  );
}

export default FormBrandEdit;
