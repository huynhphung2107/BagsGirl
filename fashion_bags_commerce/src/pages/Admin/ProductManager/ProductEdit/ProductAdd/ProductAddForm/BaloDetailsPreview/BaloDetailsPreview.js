import styles from './BaloDetailsPreview.module.scss';

import React, { Fragment, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, InputNumber, Row, Select, Space, Table } from 'antd';

const { Option } = Select;
function BaloDetailsPreview(props) {
  const [loading, setLoading] = useState(false);
  const [baloList, setBaloList] = useState(props.baloList);
  const [baloListPreview, setBaloListPreview] = useState(props.baloListPreview);

  const columns = [
    {
      title: 'Balo Code',
      dataIndex: 'baloCode',
      fixed: 'left',
      width: 100,
      sorter: (a, b) => a.baloCode.localeCompare(b.baloCode),
    },
    {
      title: 'Name Balo',
      dataIndex: 'baloName',
      width: 300,
      fixed: 'left',
      sorter: (a, b) => a.baloName.localeCompare(b.baloName),
    },
    {
      title: 'Color Balo',
      dataIndex: 'colorName',
      width: 100,
      sorter: (a, b) => a.colorName.localeCompare(b.colorName),
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
        <InputNumber value={text} onChange={(value) => handleEditChange(value, record.baloCode, 'importPrice')} />
      ),
    },
    {
      title: 'Retails Price',
      dataIndex: 'retailPrice',
      fixed: 'right',
      width: 100,
      sorter: (a, b) => a.retailPrice - b.retailPrice,
      render: (text, record) => (
        <InputNumber value={text} onChange={(value) => handleEditChange(value, record.baloCode, 'retailPrice')} />
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'baloDetailAmount',
      fixed: 'right',
      width: 100,
      sorter: (a, b) => a.baloDetailAmount - b.baloDetailAmount,
      render: (text, record) => (
        <InputNumber value={text} onChange={(value) => handleEditChange(value, record.baloCode, 'baloDetailAmount')} />
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
    const target = newData.find((item) => item.baloCode === key);
    if (target) {
      target[field] = value;
      setBaloListPreview(newData);
    }

    const newDataAdd = [...baloList];
    const targetAdd = newDataAdd.find((item) => item.baloCode === key);
    if (targetAdd) {
      targetAdd[field] = value;
      setBaloList(newDataAdd);
    }
  };
  const save = () => {
    const tempBalo = baloList[0];
    const baloAdd = {
      baloCode: tempBalo.baloCode,
      baloName: tempBalo.baloName,
      baloStatus: tempBalo.baloStatus,
    };

    // Tạo danh sách baloDetails chứa baloColor, baloBrand, baloProducer
    const baloDetails = baloList.map(
      ({ brandID, buckleTypeID, colorID, compartmentID, materialID, producerID, sizeID, typeID }) => ({
        brandID,
        buckleTypeID,
        colorID,
        compartmentID,
        materialID,
        producerID,
        sizeID,
        typeID,
      }),
    );
    console.log('====================================');
    console.log(baloAdd);
    console.log(baloDetails);
    console.log('====================================');
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
              <Button type="primary" onClick={save} loading={loading}>
                Lưu
              </Button>
            </div>
          </div>
          <span
            style={{
              marginLeft: 8,
            }}
          ></span>
        </div>
        <Table
          rowKey={(record) => record.baloCode}
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
