import styles from './BaloDetailsPreview.module.scss';

import React, { Fragment, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Row,
  Select,
  Space,
  Table,
  notification,
} from 'antd';
import baloAPI from '~/api/productsAPI';
import baloDetailsAPI from '~/api/productDetailsAPI';

const { Option } = Select;
function BaloDetailsPreview(props) {
  const [loading, setLoading] = useState(false);

  const [baloList, setBaloList] = useState(props.baloList);
  const [baloListPreview, setBaloListPreview] = useState(props.baloListPreview);

  const columns = [
    {
      title: 'Balo Code',
      dataIndex: 'productCode',
      fixed: 'left',
      width: 100,
      sorter: (a, b) => a.productCode.localeCompare(b.productCode),
    },
    {
      title: 'Name Balo',
      dataIndex: 'productName',
      width: 300,
      fixed: 'left',
      sorter: (a, b) => a.productName.localeCompare(b.productName),
    },
    {
      title: 'Color Balo',
      dataIndex: 'productColor',
      width: 100,
      sorter: (a, b) => a.productColor.localeCompare(b.productColor),
    },
    {
      title: 'Type Balo',
      dataIndex: 'typeName',
      width: 200,
      sorter: (a, b) => a.typeName.localeCompare(b.typeName),
    },
    {
      title: 'Material Balo',
      dataIndex: 'materialName',
      width: 100,
      sorter: (a, b) => a.materialName.localeCompare(b.materialName),
    },
    {
      title: 'Size Balo',
      dataIndex: 'sizeName',
      width: 100,
      sorter: (a, b) => a.sizeName.localeCompare(b.sizeName),
    },
    {
      title: 'Brand Balo',
      dataIndex: 'brandName',
      width: 100,
      sorter: (a, b) => a.brandName.localeCompare(b.brandName),
    },
    {
      title: 'Compartment Balo',
      dataIndex: 'compartmentName',
      width: 100,
      sorter: (a, b) => a.compartmentName.localeCompare(b.compartmentName),
    },
    {
      title: 'Image Url',
      dataIndex: 'imageUrl',
      width: 300,
      sorter: (a, b) => a.imageUrl.localeCompare(b.imageUrl),
    },
    {
      title: 'Producer Balo',
      dataIndex: 'producerName',
      width: 100,
      sorter: (a, b) => a.producerName.localeCompare(b.producerName),
    },

    {
      title: 'Describe',
      dataIndex: 'baloDetailDescribe',
      width: 500,
      sorter: (a, b) => a.baloDetailDescribe.localeCompare(b.baloDetailDescribe),
    },
    {
      title: 'Status',
      dataIndex: 'baloDetailStatus',
      width: 100,
      sorter: (a, b) => a.baloDetailStatus - b.baloDetailStatus,
    },
    {
      title: 'Import Price',
      dataIndex: 'importPrice',
      fixed: 'right',
      width: 100,
      sorter: (a, b) => a.importPrice - b.importPrice,
      render: (text, record) => (
        <InputNumber value={text} onChange={(value) => handleEditChange(value, record.productCode, 'importPrice')} />
      ),
    },
    {
      title: 'Retails Price',
      dataIndex: 'retailPrice',
      fixed: 'right',
      width: 100,
      sorter: (a, b) => a.retailPrice - b.retailPrice,
      render: (text, record) => (
        <InputNumber value={text} onChange={(value) => handleEditChange(value, record.productCode, 'retailPrice')} />
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'baloDetailAmount',
      fixed: 'right',
      width: 100,
      sorter: (a, b) => a.baloDetailAmount - b.baloDetailAmount,
      render: (text, record) => (
        <InputNumber
          value={text}
          onChange={(value) => handleEditChange(value, record.productCode, 'baloDetailAmount')}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      fixed: 'right',
    },
  ];

  const handleEditChange = (value, key, field) => {
    const newData = [...baloListPreview];
    const target = newData.find((item) => item.productCode === key);
    if (target) {
      target[field] = value;
      setBaloListPreview(newData);
    }

    const newDataAdd = [...baloList];
    const targetAdd = newDataAdd.find((item) => item.productCode === key);
    if (targetAdd) {
      targetAdd[field] = value;
      setBaloList(newDataAdd);
    }
  };
  const save = async () => {
    if (baloList.length !== 0) {
      const tempBalo = baloList[0];
      const baloAdd = {
        productCode: tempBalo.productCode,
        productName: tempBalo.productName,
        brandID: tempBalo.brandID,
        baloStatus: tempBalo.baloStatus,
      };

      let baloDetails = baloList.map(
        ({
          brandID,
          buckleTypeID,
          colorID,
          compartmentID,
          materialID,
          producerID,
          sizeID,
          typeID,
          imageUrl,
          importPrice,
          retailPrice,
          baloDetailDescribe,
          baloDetailAmount,
        }) => ({
          brandID,
          buckleTypeID,
          colorID,
          compartmentID,
          materialID,
          producerID,
          sizeID,
          typeID,
          imageUrl,
          importPrice,
          retailPrice,
          baloDetailDescribe,
          baloDetailAmount,
        }),
      );

      try {
        const response = await baloAPI.add(baloAdd);
        const id = response.data.id;
        baloDetails.forEach((element) => {
          element = { ...element, baloID: id };
          const response2 = baloDetailsAPI.add(element);
        });

        notification.success({
          message: 'Add thành công',
          description: 'Dữ liệu đã được thêm thành công',
          duration: 2,
        });
      } catch (error) {
        console.log(error);
        notification.error({
          message: 'Lỗi',
          description: 'Vui lòng xác nhận',
          duration: 2,
        });
      }
    } else {
      notification.error({
        message: 'Lỗi',
        description: 'Chưa có sản phẩm nào trong Danh sách thêm, vui lòng điền Form bên dưới để thêm',
        duration: 2,
      });
    }
  };
  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    start();
    setBaloList(props.baloList);
    setBaloListPreview(props.baloListPreview);
  }, [props.baloList, props.baloListPreview]);
  return (
    <Fragment>
      <div>
        <div
          style={{
            marginBottom: 16,
          }}
        >
          <div className={styles.handleButton}>
            <div>
              <Button type="primary" onClick={start} loading={loading}>
                Reload
              </Button>
            </div>
            <div className={styles.buttonSave}>
              <Popconfirm
                title="Xác Nhận"
                description="Bạn Có chắc chắn muốn Thêm?"
                okText="Đồng ý"
                cancelText="Không"
                onConfirm={save}
                onCancel={start}
              >
                <Button type="primary" loading={loading}>
                  Lưu
                </Button>
              </Popconfirm>
            </div>
          </div>
          <span
            style={{
              marginLeft: 8,
            }}
          ></span>
        </div>
        <Table
          rowKey={(record) => record.productCode}
          loading={loading}
          columns={columns}
          dataSource={baloListPreview}
          pagination={false}
          scroll={{
            x: 1500,
            y: 600,
          }}
          style={{ maxHeight: '700px' }}
        />
      </div>
    </Fragment>
  );
}
export default BaloDetailsPreview;
