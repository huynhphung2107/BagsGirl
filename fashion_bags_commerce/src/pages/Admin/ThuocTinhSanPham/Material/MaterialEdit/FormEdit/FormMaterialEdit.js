import '../FormEdit/FormMaterialEdit.css';
import React, { Fragment, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Col, Drawer,Option, Form, Input, Row, Select, Space, notification } from 'antd';
import materialAPI from '~/api/propertitesBalo/materialAPI';

function FormMaterialEdit(props) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const updateFunc = async (values) => {
    setError(false);
    if (!error) {
      let update = { ...values};
      try {
        const response = await materialAPI.update(update);
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
      }
    }
  };

  
  return (
    <Fragment >
      
      <div  style={{ color: 'red' }}>
      <Button type="primary" className="btn btn-warning" onClick={showDrawer} icon={<EditOutlined />}>
        Edit
      </Button>

      <Drawer
        title={'Edit - ' + props.material.materialCode}
        width={400}
        onClose={onClose}
        open={open} // Sửa thành visible
        bodyStyle={{
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
        <Form layout="vertical" hideRequiredMark initialValues={props.material}
        
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="materialCode"
                label="Mã Code Material"
                
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền Mã Code Material',
                  },
                ]}
              >
                <Input placeholder="Vui lòng điền Mã Code Material" disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="materialName"
                label="Tên"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng điền tên Material',
                  },
                ]}
              >
                <Input name="materialName" placeholder="Vui lòng điền Mã Code Material" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="materialStatus"
                label="Trạng Thái Material"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please select an owner',
                //   },
                // ]}
              >
                <Select placeholder="Vui lòng chọn Trạng Thái Material">
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

export default FormMaterialEdit;
