//CSS
import styles from './productAddForm.module.scss';
//React Component
import React, { Fragment, memo, useContext, useEffect, useState } from 'react';
import { InboxOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Form,
  InputNumber,
  Modal,
  Popconfirm,
  Row,
  Select,
  Table,
  Typography,
  Upload,
  message,
  notification,
} from 'antd';
import Input from 'antd/es/input/Input';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '~/firebase/firebase';

//API
import baloAPI from '~/api/productsAPI';
// Utils
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';
import BaloDetailsPreview from './BaloDetailsPreview/baloDetailsPreview';
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
// import { useDropzone } from 'react-dropzone';
import imageAPI from '~/api/imageAPI';
import { async } from '@firebase/util';
import Dragger from 'antd/es/upload/Dragger';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
//Function Component
function ProductAddForm() {
  const [images, setImages] = useState([]);
  const [isFirst, setIsFirst] = useState(false);
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
  const [downloadedURL, setDownloadedURL] = useState([]);

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
      const materialData = await materialAPI.getAll();
      setMaterial(materialData.data);
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

    let addBalo = { ...values, productCode: genCodeAuto };
    setBaloList([...baloList, addBalo]);

    let colorSelected = color.find((option) => option.colorId === values.colorId);
    const colorSelectedName = colorSelected.colorName;
    let brandSelected = brand.find((option) => option.brandId === values.brandId);
    const brandSelectedName = brandSelected.brandName;
    let typeSelected = type.find((option) => option.typeId === values.typeId);
    const typeSelectedName = typeSelected.typeName;
    let materialSelected = material.find((option) => option.materialId === values.materialId);
    const materialSelectedName = materialSelected.materialName;
    let compartmentSelected = compartment.find((option) => option.compartmentId === values.compartmentId);
    const compartmentSelectedName = compartmentSelected.compartmentName;
    let sizeSelected = size.find((option) => option.sizeId === values.sizeId);
    const sizeSelectedName = sizeSelected.sizeName;
    let producerSelected = producer.find((option) => option.producerId === values.producerId);
    const producerSelectedName = producerSelected.producerName;
    let buckleTypeSelected = buckleType.find((option) => option.buckleTypeId === values.buckleTypeId);
    const buckleTypeSelectedName = buckleTypeSelected.buckleTypeName;

    let tempBalo = {
      ...values,
      productCode: genCodeAuto,
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

  const resetForm = () => {
    form.resetFields();
    setIsFirst(false);
    setBaloList([]);
    setBaloListPreview([]);
    notification.success({
      message: 'Hoàn Thành',
      description: 'Đã Reset Form thành công !!!!',
      duration: 2,
    });
  };
  const onConfirm = () => {
    setIsFirst(true);
    form.submit();
    setPopconfirmVisible(false);
  };

  const testCase = () => {
    message.success('Đây là Test Case thử xem như nào');
    return 'Tết đây!!!';
  };
  const onCancel = () => {
    setPopconfirmVisible(false); // Đóng Popconfirm sau khi xác nhận
  };

  const [fileList, setFileList] = useState([]);

  const handleSendUpload = async () => {
    const urls = await handleUpload();
    return urls;
  };
  const handleUpload = async () => {
    const newList = [];
    if (fileList.length === 0) {
      message.info('Vui lòng chọn ảnh!!!!');
      return;
    }
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];

      const storageRef = ref(storage, `mulitpleFiles/${file.name}`);

      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        newList.push(downloadURL);

        message.success('Tải lên hình ảnh thành công');
      } catch (error) {
        console.log('Lỗi khi tải lên:', error);
        message.error('Lỗi khi tải lên hình ảnh');
      }
    }

    setDownloadedURL(newList);
    return newList;
  };

  useEffect(() => {
    let err = '';

    if (fileList.length >= 6) {
      err = 'Chỉ được chọn tối đa 6 ảnh , vui lòng chọn lại!!!!';
      setFileList([]);
    } else {
      for (let i = 0; i < fileList.length; i++) {
        const element = fileList[i];

        if (!(element.type !== 'image/jpg' || element.type !== 'image/png')) {
          err = 'Vui lòng chọn ảnh có định dạng PNG/JPG';

          setFileList([]);
          break;
        }
        if (element.size / 1024 / 1024 > 5) {
          err = 'Size ảnh quá lớn (nhỏ hơn 5Mb), vui lòng chọn lại';

          setFileList([]);
          break;
        }
      }
    }
    if (err !== '') {
      message.error(err);
      err = '';
    }
  }, [fileList]);
  const addFileImg = (fileLists) => {
    setFileList(fileLists);
  };
  const beforeUpload = (file, fileLists) => {
    addFileImg(fileLists);
    return false;
  };

  return (
    <Fragment>
      <div>
        <BaloDetailsPreview
          baloList={baloList}
          baloListPreview={baloListPreview}
          testCase={testCase}
          handleSendUpload={handleSendUpload}
        />
      </div>
      <div>
        <div>
          <Row>
            <h1 className={styles.titleInfo}>Thông Tin Balo Chi tiết</h1>
          </Row>
        </div>
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
        <div className={styles.form}>
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
                name="colorId"
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
                    <Select.Option key={o.colorId} value={o.colorId}>
                      {o.colorName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Kiểu Balo"
                name="typeId"
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
                    <Select.Option key={o.typeId} value={o.typeId}>
                      {o.typeName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Chất liệu Balo"
                name="materialId"
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
                    <Select.Option key={o.materialId} value={o.materialId}>
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
                name="compartmentId"
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
                    <Select.Option key={o.compartmentId} value={o.compartmentId}>
                      {o.compartmentName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Balo Size"
                name="sizeId"
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
                    <Select.Option key={o.sizeId} value={o.sizeId}>
                      {o.sizeName} - {o.lengthSize}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Thương Hiệu"
                name="brandId"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng chọn Thương Hiệu!',
                  },
                ]}
              >
                <Select
                  disabled={isFirst}
                  size="large"
                  style={{
                    width: 200,
                  }}
                >
                  {brand.map((o) => (
                    <Select.Option key={o.brandId} value={o.brandId}>
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
                name="producerId"
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
                    <Select.Option key={o.producerId} value={o.producerId}>
                      {o.producerName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Kiểu Khóa"
                name="buckleTypeId"
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
                    <Select.Option key={o.buckleTypeId} value={o.buckleTypeId}>
                      {o.buckleTypeName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Trạng Thái"
                name="productDetailStatus"
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
                      value: 1,
                      label: 'Hoạt Động',
                    },
                    {
                      value: 0,
                      label: 'Không Hoạt Động',
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row className={styles.upload}>
            <Col span={8}>
              <Form.Item
                label="Mô tả"
                name="productDetailDescribe"
                rules={[
                  {
                    required: false,
                    message: 'Vui lòng điền Tên Balo!',
                  },
                ]}
              >
                <TextArea rows={7} />
              </Form.Item>
            </Col>
            <Col span={16} className={styles.dragger}>
              <Dragger
                multiple
                name="files"
                showUploadList={false}
                beforeUpload={beforeUpload}
                height={'90%'}
                style={{ width: '80%' }}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Kéo thả hình ảnh vào đây</p>
              </Dragger>
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
            <Col span={4}>
              <Popconfirm
                title="Xác Nhận"
                description="Bạn Có chắc chắn muốn ResetForm và thêm Balo Khác?"
                okText="Đồng ý"
                cancelText="Không"
                onConfirm={resetForm}
                onCancel={onCancel}
              >
                <Button type="primary">ResetForm</Button>
              </Popconfirm>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Fragment>
  );
}
export default ProductAddForm;
