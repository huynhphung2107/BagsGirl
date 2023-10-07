//CSS
import styles from './index.module.scss';
//React Component
import React, { Fragment, memo, useContext, useEffect, useState } from 'react';
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
import colorAPI from '~/api/propertitesBalo/colorAPI';
import { Option } from 'antd/es/mentions';
import brandAPI from '~/api/propertitesBalo/brandAPI';
import compartmentAPI from '~/api/propertitesBalo/compartmentAPI';
import materialAPI from '~/api/propertitesBalo/materialAPI';
import producerAPI from '~/api/propertitesBalo/producerAPI';
import sizeAPI from '~/api/propertitesBalo/sizeAPI';
import typeAPI from '~/api/propertitesBalo/typeAPI';
import buckleTypeAPI from '~/api/propertitesBalo/buckleTypeAPI';

//Function Component
function ProductAddForm() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(true);
  const [isPopconfirmVisible, setPopconfirmVisible] = useState(false);

  const [baloList, setBaloList] = useState([]);
  const [baloListPreview, setBaloListPreview] = useState([]);

  const [brand, setBrand] = useState([]);
  const [buckleType, setBuckleType] = useState([]);
  const [color, setColor] = useState([]);
  const [compartment, setCompartment] = useState([]);
  const [material, setMaterial] = useState([]);
  const [producer, setProducer] = useState([]);
  const [size, setSize] = useState([]);
  const [type, setType] = useState([]);

  const viewBaloProps = async () => {
    try {
      const brandData = await brandAPI.getAll();
      setBrand(brandData.data);
      const buckleTypeData = await buckleTypeAPI.getAll();
      setBuckleType(buckleTypeData.data);
      const colorData = await colorAPI.getAll();
      setColor(colorData.data);
      const compartmentData = await compartmentAPI.getAll();
      setCompartment(compartmentData.data);
      const materrialData = await materialAPI.getAll();
      setMaterial(materrialData.data);
      const producerData = await producerAPI.getAll();
      setProducer(producerData.data);
      const sizeData = await sizeAPI.getAll();
      setSize(sizeData.data);
      const typeData = await typeAPI.getAll();
      setType(typeData.data);
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };

  console.log('render');
  useEffect(() => {
    viewBaloProps();
  }, []);
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
  const handleAddBaloDetails = (values) => {
    const genCodeAuto = generateCustomCode('baloCode', 9);

    let addBalo = { ...values, baloCode: genCodeAuto };
    setBaloList([...baloList, addBalo]);

    let colorSelected = color.find((option) => option.id === values.colorID);
    const colorSelectedName = colorSelected.colorName;
    let brandSelected = brand.find((option) => option.id === values.brandID);
    const brandSelectedName = brandSelected.brandName;
    let typeSelected = type.find((option) => option.id === values.typeID);
    const typeSelectedName = typeSelected.typeName;
    let materialSelected = material.find((option) => option.id === values.materialID);
    const materialSelectedName = materialSelected.materialName;
    let compartmentSelected = compartment.find((option) => option.id === values.compartmentID);
    const compartmentSelectedName = compartmentSelected.compartmentName;
    let sizeSelected = size.find((option) => option.id === values.sizeID);
    const sizeSelectedName = sizeSelected.sizeName;
    let producerSelected = producer.find((option) => option.id === values.producerID);
    const producerSelectedName = producerSelected.producerName;
    let buckleTypeSelected = buckleType.find((option) => option.id === values.buckleTypeID);
    const buckleTypeSelectedName = buckleTypeSelected.buckleTypeName;

    let tempBalo = {
      ...values,
      baloCode: genCodeAuto,
      colorName: colorSelectedName,
      brandName: brandSelectedName,
      typeName: typeSelectedName,
      materialName: materialSelectedName,
      compartmentName: compartmentSelectedName,
      sizeName: sizeSelectedName,
      producerName: producerSelectedName,
      buckleTypeName: buckleTypeSelectedName,
    };

    setBaloListPreview([...baloListPreview, tempBalo]);

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
        <BaloDetailsPreview baloList={baloList} baloListPreview={baloListPreview} />
      </div>
      <div>
        <div>
          <Row>
            <h1 className={styles.titleInfo}>Thông Tin Balo Chi tiết</h1>
          </Row>
        </div>
        <Form
          onFinish={handleAddBaloDetails}
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
                  name="colorID"
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
                  >
                    {color.map((o) => (
                      <Select.Option key={o.id} value={o.id}>
                        {o.colorName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Kiểu Balo"
                  name="typeID"
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
                  >
                    {type.map((o) => (
                      <Select.Option key={o.id} value={o.id}>
                        {o.typeName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Chất liệu Balo"
                  name="materialID"
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
                  >
                    {material.map((o) => (
                      <Select.Option key={o.id} value={o.id}>
                        {o.materialName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={8}>
                <Form.Item
                  label="Kiểu Ngăn"
                  name="compartmentID"
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
                  >
                    {compartment.map((o) => (
                      <Select.Option key={o.id} value={o.id}>
                        {o.compartmentName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Balo Size"
                  name="sizeID"
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
                  >
                    {size.map((o) => (
                      <Select.Option key={o.id} value={o.id}>
                        {o.sizeName} - {o.lengthSize}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Thương Hiệu"
                  name="brandID"
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
                  >
                    {brand.map((o) => (
                      <Select.Option key={o.id} value={o.id}>
                        {o.brandName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Nhà Sản Xuất"
                  name="producerID"
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
                  >
                    {producer.map((o) => (
                      <Select.Option key={o.id} value={o.id}>
                        {o.producerName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Kiểu Khóa"
                  name="buckleTypeID"
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
                  >
                    {buckleType.map((o) => (
                      <Select.Option key={o.id} value={o.id}>
                        {o.buckleTypeName}
                      </Select.Option>
                    ))}
                  </Select>
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
                  onConfirm={handleAddBaloDetails}
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
