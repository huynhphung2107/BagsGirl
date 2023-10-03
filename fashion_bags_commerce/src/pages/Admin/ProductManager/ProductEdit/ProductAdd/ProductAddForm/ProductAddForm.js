//CSS
import styles from './index.module.scss';
//React Component
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, InputNumber, Modal, Popconfirm, Row, Select, Typography, notification } from 'antd';
import Input from 'antd/es/input/Input';

//API
import baloAPI from '~/api/baloAPI';
// Utils
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';
import BaloDetailsPreview from './BaloDetailsPreview/BaloDetailsPreview';
import TextArea from 'antd/es/input/TextArea';
import Title from 'antd/es/skeleton/Title';

const mockData = [
  {
    id: '50a0d464-206e-4fb7-b2be-009a62451fc2',
    baloCode: 'balo11',
    baloName: 'Rivacase 7760',
    colorName: 'Đỏ Nâu',
    typeName: 'Balo Leo Núi',
    materialName: 'Da Napas',
    sizeName: 'Size L',
    brandName: 'Puma',
    compartmentName: 'Ngăn xếp 02',
    buckleTypeName: 'Khóa Kéo',
    imageUrl: '',
    producerCode: 'pro009',
    producerName: 'Gucci',
    importPrice: 83763.0,
    retailPrice: 9.3973637e9,
    baloDetailAmount: 88,
    baloDetailDescribe: 'good',
    baloDetailStatus: 1,
  },
  {
    id: '7ce54f90-56fa-42f6-9209-2a30eefb1b36',
    baloCode: 'balo 27',
    baloName: 'Balo mini nhấn túi phụ',
    colorName: 'Cam',
    typeName: 'Balo di lam',
    materialName: 'Da PPV',
    sizeName: 'Size XXXL',
    brandName: 'MLB',
    compartmentName: 'Ngăn đơn 04',
    buckleTypeName: 'Khóa mạ vàng',
    imageUrl: '',
    producerCode: 'pro002',
    producerName: 'Thuong Dinh',
    importPrice: 20000.0,
    retailPrice: 3.68633626e9,
    baloDetailAmount: 77,
    baloDetailDescribe: 'normal',
    baloDetailStatus: 0,
  },
  {
    id: 'cef8deca-8407-4205-a84f-3f5d2861992e',
    baloCode: 'balo10',
    baloName: 'Anello AT-B2261',
    colorName: 'Hồng Nhạt',
    typeName: 'Balo laptop',
    materialName: 'Da bóng',
    sizeName: 'Size M',
    brandName: '\r\nVASCARA',
    compartmentName: 'Ngăn đơn 01',
    buckleTypeName: 'Khóa cao su',
    imageUrl: null,
    producerCode: 'pr0015',
    producerName: 'vascava',
    importPrice: 4000.0,
    retailPrice: 4444.0,
    baloDetailAmount: 35,
    baloDetailDescribe: 'good',
    baloDetailStatus: 0,
  },
  {
    id: '19f038d1-d317-49a3-97fe-3ff0d5c8f015',
    baloCode: 'balo6',
    baloName: 'Solo Define 15.6 inch UBN708-4',
    colorName: 'Tím Bạc',
    typeName: 'Balo du lich',
    materialName: 'Da nổi',
    sizeName: 'Size L',
    brandName: 'Thuong Dinh',
    compartmentName: 'Ngăn đơn 01',
    buckleTypeName: 'khóa nút',
    imageUrl: null,
    producerCode: 'pro001',
    producerName: 'Viet Tien',
    importPrice: 2300.0,
    retailPrice: 4.0e7,
    baloDetailAmount: 16,
    baloDetailDescribe: 'normal',
    baloDetailStatus: 0,
  },
  {
    id: 'c1193ed4-87e1-4871-b3f4-519fdae51329',
    baloCode: 'balo22',
    baloName: 'Balo túi hộp dập vân nhuyễn',
    colorName: 'Nâu',
    typeName: 'Balo girl pho',
    materialName: 'Da công nghiệp',
    sizeName: 'Size M',
    brandName: 'Viet Tien',
    compartmentName: 'Ngăn đơn',
    buckleTypeName: 'Khóa Bật',
    imageUrl: '',
    producerCode: 'pro003',
    producerName: 'Jody',
    importPrice: 120.0,
    retailPrice: 1000000.0,
    baloDetailAmount: 11,
    baloDetailDescribe: 'normal',
    baloDetailStatus: 1,
  },
  {
    id: '176013b3-2290-4a90-9f3e-62a83f6eae7b',
    baloCode: 'balo 28',
    baloName: 'Balo mini rising stars',
    colorName: 'Tràm Đen',
    typeName: 'Balo unisex',
    materialName: 'Thô',
    sizeName: 'Size XL',
    brandName: 'Owen',
    compartmentName: 'Ngăn nối tiếp 03',
    buckleTypeName: 'Khóa Nhựa',
    imageUrl: '',
    producerCode: 'pro008',
    producerName: 'Channel',
    importPrice: 2000.0,
    retailPrice: 55555.0,
    baloDetailAmount: 13,
    baloDetailDescribe: 'normal',
    baloDetailStatus: 1,
  },
  {
    id: 'c0e25354-d7ac-4931-8594-6307a987e3e5',
    baloCode: 'balo 30',
    baloName: 'Balo mini denim nhấn khóa kéo',
    colorName: 'Đen',
    typeName: 'Balo nắp gập',
    materialName: 'Polyester',
    sizeName: 'Size M',
    brandName: 'Owen',
    compartmentName: 'Ngăn nối tiếp',
    buckleTypeName: 'Khóa cao su',
    imageUrl: '',
    producerCode: 'pro004',
    producerName: 'Adias',
    importPrice: 3000.0,
    retailPrice: 2.0e8,
    baloDetailAmount: 2,
    baloDetailDescribe: 'normal',
    baloDetailStatus: 1,
  },
  {
    id: 'd8d7b922-bac3-4d8b-a293-75098686129b',
    baloCode: 'balo12',
    baloName: 'Anello AH-B1752',
    colorName: 'Nâu',
    typeName: 'Balo di bay',
    materialName: 'Vải Đan',
    sizeName: 'Size L',
    brandName: ' channel',
    compartmentName: 'Ngăn đơn 03',
    buckleTypeName: 'Khóa Bật',
    imageUrl: '',
    producerCode: 'pro003',
    producerName: 'Jody',
    importPrice: 10000.0,
    retailPrice: 1.0e8,
    baloDetailAmount: 12,
    baloDetailDescribe: 'normal',
    baloDetailStatus: 1,
  },
  {
    id: 'f9957907-5ca9-4b3a-aa47-75ca4f488cde',
    baloCode: 'balo9',
    baloName: 'Herschel Retreat',
    colorName: 'Tím',
    typeName: 'Balo Leo Núi',
    materialName: 'Da đánh bóng',
    sizeName: 'Size L',
    brandName: 'PEDRO',
    compartmentName: 'Ngăn nối tiếp 01',
    buckleTypeName: 'Khóa Bấm',
    imageUrl: '',
    producerCode: 'pro007',
    producerName: 'MLB',
    importPrice: 7455.0,
    retailPrice: 8.3636336e7,
    baloDetailAmount: 22,
    baloDetailDescribe: 'normal',
    baloDetailStatus: 1,
  },
  {
    id: '17ecd599-b2d8-49ec-8b9f-765e006a8a83',
    baloCode: 'balo8',
    baloName: 'Herschel Little America TM',
    colorName: 'Hồng',
    typeName: 'Balo du lich',
    materialName: 'Da sần',
    sizeName: 'Size XXXL',
    brandName: 'Viet Tien',
    compartmentName: 'Ngăn đơn 02',
    buckleTypeName: 'khóa nút',
    imageUrl: '',
    producerCode: 'pro006',
    producerName: 'PEDRO',
    importPrice: 2300.0,
    retailPrice: 3.0e7,
    baloDetailAmount: 15,
    baloDetailDescribe: 'normal',
    baloDetailStatus: 1,
  },
  {
    id: '508bb652-6c24-4cd9-8136-7ca3bb94fe79',
    baloCode: 'balo13',
    baloName: 'Balo unisex phom chữ nhật Classic Monogram',
    colorName: 'Xanh Rêu',
    typeName: 'Balo Túi Kéo',
    materialName: 'Oxford Textile mật độ cao',
    sizeName: 'Size S',
    brandName: 'Fila',
    compartmentName: 'Ngăn xếp',
    buckleTypeName: 'Khóa Nhôm',
    imageUrl: '',
    producerCode: 'pro005',
    producerName: 'Puma',
    importPrice: 10000.0,
    retailPrice: 9383700.0,
    baloDetailAmount: 14,
    baloDetailDescribe: 'medium',
    baloDetailStatus: 1,
  },
  {
    id: '3e994611-6808-4982-94d9-9578a77b3825',
    baloCode: 'balo 24',
    baloName: 'Balo cói nhấn túi hộp khóa gài',
    colorName: 'Lục',
    typeName: 'Balo boy pho',
    materialName: 'Da Ca sấu',
    sizeName: 'Size XXl',
    brandName: 'Adias',
    compartmentName: 'Ngăn song song',
    buckleTypeName: 'Khóa từ',
    imageUrl: '',
    producerCode: 'pro0010',
    producerName: 'Dior',
    importPrice: 8833.0,
    retailPrice: 7458535.0,
    baloDetailAmount: 222,
    baloDetailDescribe: 'bad',
    baloDetailStatus: 0,
  },
  {
    id: 'df6960d3-0ecf-4096-85ed-9ba4413e381f',
    baloCode: 'balo3',
    baloName: 'Balo đi học thương hiệu LV',
    colorName: 'Tràm',
    typeName: 'Balo Du Lịch',
    materialName: ' vải nhăn',
    sizeName: 'Size XL',
    brandName: 'Luis Vustion',
    compartmentName: 'Ngăn song song',
    buckleTypeName: 'Khóa bấm',
    imageUrl: null,
    producerCode: 'pr0014',
    producerName: 'friday',
    importPrice: 4500.0,
    retailPrice: 5.0e7,
    baloDetailAmount: 17,
    baloDetailDescribe: 'normal',
    baloDetailStatus: 0,
  },
  {
    id: 'cc2bdff1-3460-422e-a8e8-b2dc6ec85cec',
    baloCode: 'balo25',
    baloName: 'Balo casual phối màu tươi trẻ',
    colorName: 'Xanh',
    typeName: 'Balo Leo Núi',
    materialName: 'Da Napas',
    sizeName: 'Size L',
    brandName: ' channel',
    compartmentName: 'Ngăn xếp 02',
    buckleTypeName: 'Khóa Bấm',
    imageUrl: null,
    producerCode: 'pr020',
    producerName: 'chamer',
    importPrice: 1200.0,
    retailPrice: 7.0e8,
    baloDetailAmount: 19,
    baloDetailDescribe: 'normal',
    baloDetailStatus: 0,
  },
  {
    id: 'a0de470a-79ab-4109-98b0-baa250b3fbcb',
    baloCode: 'balo2',
    baloName: 'Balo đeo chéo Da cá sấu',
    colorName: 'Vàng',
    typeName: 'Balo rút dây',
    materialName: ' Bò',
    sizeName: 'Size L',
    brandName: 'yody',
    compartmentName: 'Ngăn xếp 04',
    buckleTypeName: 'Khóa bấm',
    imageUrl: null,
    producerCode: 'pr0013',
    producerName: ' chamer',
    importPrice: 5000.0,
    retailPrice: 5555.0,
    baloDetailAmount: 19,
    baloDetailDescribe: 'good',
    baloDetailStatus: 1,
  },
  {
    id: '25273a52-3c91-420e-9d70-beec006ed505',
    baloCode: 'balo5',
    baloName: 'Balo đeo chéo màu nâu da Napas',
    colorName: 'Đỏ',
    typeName: 'Balo kéo',
    materialName: 'Da vải đũi',
    sizeName: 'Size XL',
    brandName: 'Owen',
    compartmentName: 'Ngăn xếp',
    buckleTypeName: 'Khóa Nhựa',
    imageUrl: '',
    producerCode: 'pro0012',
    producerName: 'Zara',
    importPrice: 1000.0,
    retailPrice: 7735333.0,
    baloDetailAmount: 11,
    baloDetailDescribe: 'good',
    baloDetailStatus: 1,
  },
  {
    id: 'bd2ebf99-b262-466a-9fd4-cd1439ba20ce',
    baloCode: 'balo1',
    baloName: 'Balo đeo chéo Da cá sấu',
    colorName: 'Xanh lá cây',
    typeName: 'Balo túi hộp',
    materialName: 'Da nhân tạo vải',
    sizeName: 'Size L',
    brandName: 'TokyoLife',
    compartmentName: 'Ngăn nối tiếp 02',
    buckleTypeName: 'Khóa Dây',
    imageUrl: '',
    producerCode: 'pr0016',
    producerName: 'overen',
    importPrice: 24000.0,
    retailPrice: 763636.0,
    baloDetailAmount: 33,
    baloDetailDescribe: 'good',
    baloDetailStatus: 1,
  },
  {
    id: 'ac6d5e8c-3264-4467-8ae2-d91c5f2c9afd',
    baloCode: 'balo 25',
    baloName: 'Balo mini vân da cá sấu',
    colorName: 'Vàng Cam',
    typeName: 'Balo cong so',
    materialName: 'Da nhân tạo',
    sizeName: 'Size L',
    brandName: 'Viet Tien',
    compartmentName: 'Ngăn lồng',
    buckleTypeName: 'Khóa Bật',
    imageUrl: '',
    producerCode: 'pr0012',
    producerName: 'Yody',
    importPrice: 3000.0,
    retailPrice: 33322.0,
    baloDetailAmount: 45,
    baloDetailDescribe: 'good',
    baloDetailStatus: 0,
  },
  {
    id: 'f64b4900-ef94-4678-a9f9-da1784fd4adf',
    baloCode: 'balo',
    baloName: 'Targus Sagano EcoSmart Campus Backpack TBB636',
    colorName: 'Xanh Ngọc',
    typeName: 'Balo unisex',
    materialName: 'Da vải đũi',
    sizeName: 'Size XXXL',
    brandName: 'MLB',
    compartmentName: 'Ngăn xếp 02',
    buckleTypeName: 'khóa inor',
    imageUrl: null,
    producerCode: 'pro0011',
    producerName: 'Prada',
    importPrice: 6700.0,
    retailPrice: 6.0e8,
    baloDetailAmount: 18,
    baloDetailDescribe: 'normal',
    baloDetailStatus: 0,
  },
  {
    id: 'ef2f62b8-1c87-4bf7-be4b-fca6c3e79db8',
    baloCode: 'balo 29',
    baloName: 'Balo ngăn đôi phối viền đen',
    colorName: 'Tím',
    typeName: 'Balo  hin',
    materialName: 'Vải Cotton',
    sizeName: 'Size XL',
    brandName: 'Luis Vustion',
    compartmentName: 'Ngăn xếp 03',
    buckleTypeName: 'Khóa  inor',
    imageUrl: '',
    producerCode: 'pro003',
    producerName: 'Owen',
    importPrice: 8363.0,
    retailPrice: 9.9999998e10,
    baloDetailAmount: 44,
    baloDetailDescribe: 'good',
    baloDetailStatus: 0,
  },
];

//Function Component
function ProductAddForm() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);
  const [isPopconfirmVisible, setPopconfirmVisible] = useState(false);
  const [baloList, setBaloList] = useState([]);
  //   const [newBaloDetail, setNewBaloDetail] = useState({});
  let newBaloDetail = {};
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
      description: errorMessages + '/n',
      duration: 2,
    });
  };
  const onClose = () => {
    form.resetFields();
    setOpen(false);
  };
  const handleresetForm = () => {
    form.resetFields([
      'colorName',
      'typeName',
      'materialName',
      'sizeName',
      'brandName',
      'compartmentName',
      'buckleTypeName',
      'producerName',
      'importPrice',
      'retailPrice',
      'baloDetailAmount',
      'baloDetailDescribe',
      'imageUrl',
      'baloDetailStatus',
    ]);
    setOpen(false);
  };
  const habdleAddBaloDetails = (values) => {
    let addBalo = { ...values, baloCode: generateCustomCode('baloCode', 9) };
    setBaloList([...baloList, addBalo]);

    notification.success({
      message: 'Thành Công',
      description: 'Dữ liệu đã được thêm!!!!',
      duration: 2,
    });
  };

  const onConfirm = () => {
    form.submit();
    setPopconfirmVisible(false);
  };

  const onCancel = () => {
    setPopconfirmVisible(false); // Đóng Popconfirm sau khi xác nhận
  };
  return (
    <Fragment>
      <div>
        <BaloDetailsPreview baloList={baloList} />
      </div>
      <div>
        <div>
          <Row>
            <h1 className={styles.titleInfo}>Thông Tin Balo Chi tiết</h1>
          </Row>
        </div>
        <Form
          onFinish={habdleAddBaloDetails}
          initialValues={{
            colorName: '',
            typeName: '',
            materialName: '',
            sizeName: '',
            brandName: '',
            compartmentName: '',
            buckleTypeName: '',
            producerName: '',
            baloDetailStatus: '',
            baloDetailDescribe: '',
            imageUrl: '',
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
          style={{}}
        >
          <Row>
            <Col span={8}>
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
            </Col>
          </Row>

          <div>
            <hr></hr>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Giá Nhập"
                  name="importPrice"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng Điền giá nhập!',
                    },
                  ]}
                >
                  <InputNumber
                    size="large"
                    style={{ width: 200 }}
                    step={1000}
                    addonAfter="VND"
                    formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\₫\s?|(,*)/g, '')}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Giá Bán"
                  name="retailPrice"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng điền giá Bán!',
                    },
                  ]}
                >
                  <InputNumber
                    size="large"
                    style={{ width: 200 }}
                    step={1000}
                    addonAfter="VND"
                    formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\₫\s?|(,*)/g, '')}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Số lượng"
                  name="baloDetailAmount"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng điền Số lượng!',
                    },
                  ]}
                >
                  <InputNumber
                    size="large"
                    style={{ width: 200 }}
                    step={5}
                    addonAfter="Cái"
                    formatter={(value) => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value.replace(/\₫\s?|(,*)/g, '')}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Màu sắc"
                  name="colorName"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn màu sắc Balo!',
                    },
                  ]}
                >
                  <Select
                    size="large"
                    style={{
                      width: 200,
                    }}
                    options={[
                      {
                        value: '1',
                        label: 'Xanh nước biến',
                      },
                      {
                        value: '0',
                        label: 'Đỏ',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Kiểu Balo"
                  name="typeName"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn Kiểu Balo!',
                    },
                  ]}
                >
                  <Select
                    size="large"
                    style={{
                      width: 200,
                    }}
                    options={[
                      {
                        value: 'Xách Tay',
                        label: 'Xách Tay',
                      },
                      {
                        value: 'Đeo Chéo',
                        label: 'Đeo Chéo',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Chất liệu Balo"
                  name="materialName"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn Chất Liệu Balo!',
                    },
                  ]}
                >
                  <Select
                    size="large"
                    style={{
                      width: 200,
                    }}
                    options={[
                      {
                        value: 'Da Napas',
                        label: 'Da Napas',
                      },
                      {
                        value: 'Da cá xấu',
                        label: 'Da cá xấu',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={8}>
                <Form.Item
                  label="Kiểu Ngăn"
                  name="compartmentName"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn Kiểu ngăn Balo!',
                    },
                  ]}
                >
                  <Select
                    size="large"
                    style={{
                      width: 200,
                    }}
                    options={[
                      {
                        value: 'Ngăn xếp',
                        label: 'Ngăn xếp',
                      },
                      {
                        value: 'Ngăn lồng',
                        label: 'Khóa lồng',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Balo Size"
                  name="sizeName"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn Size!',
                    },
                  ]}
                >
                  <Select
                    size="large"
                    style={{
                      width: 200,
                    }}
                    options={[
                      {
                        value: 'S',
                        label: 'S',
                      },
                      {
                        value: 'M',
                        label: 'M',
                      },
                      {
                        value: 'L',
                        label: 'L',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Thương Hiệu"
                  name="brandName"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chọn Thương Hiệu!',
                    },
                  ]}
                >
                  <Select
                    size="large"
                    style={{
                      width: 200,
                    }}
                    options={[
                      {
                        value: 'Nike',
                        label: 'Adias',
                      },
                      {
                        value: 'Puma',
                        label: 'Puma',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Nhà Sản Xuất"
                  name="producerName"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng Chọn NSX!',
                    },
                  ]}
                >
                  <Select
                    size="large"
                    style={{
                      width: 200,
                    }}
                    options={[
                      {
                        value: '0',
                        label: 'Việt Tiến',
                      },
                      {
                        value: '1',
                        label: 'Owen',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Kiểu Khóa"
                  name="buckleTypeName"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng Chọn Kiếu Khóa!',
                    },
                  ]}
                >
                  <Select
                    size="large"
                    style={{
                      width: 200,
                    }}
                    options={[
                      {
                        value: 'Khóa Kéo',
                        label: 'Khóa Kéo',
                      },
                      {
                        value: 'Khóa Dây',
                        label: 'Khóa Dây',
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Trạng Thái"
                  name="baloDetailStatus"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng Chọn Kiếu Khóa!',
                    },
                  ]}
                >
                  <Select
                    size="large"
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
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Link Image"
                  name="imageUrl"
                  rules={[
                    {
                      required: false,
                      message: 'Vui lòng Điền Mô tả!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Mô tả"
                  name="baloDetailDescribe"
                  rules={[
                    {
                      required: false,
                      message: 'Vui lòng Điền Mô tả!',
                    },
                  ]}
                >
                  <TextArea
                    size="large"
                    style={{
                      width: 500,
                      height: 100,
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Row>
              <Col span={4}>
                <Popconfirm
                  title="Xác Nhận"
                  description="Bạn Có chắc chắn muốn Thêm?"
                  okText="Đồng ý"
                  cancelText="Không"
                  onConfirm={habdleAddBaloDetails}
                  onCancel={onCancel}
                >
                  <Button type="primary" onClick={''}>
                    Lưu Ngay
                  </Button>
                </Popconfirm>
              </Col>
              <Col span={4}>
                <Popconfirm
                  title="Xác Nhận"
                  description="Bạn Có chắc chắn muốn Thêm?"
                  okText="Đồng ý"
                  cancelText="Không"
                  onConfirm={onConfirm}
                  onCancel={onCancel}
                >
                  <Button type="primary">Thêm Chi Tiết Balo</Button>
                </Popconfirm>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </Fragment>
  );
}
export default ProductAddForm;
