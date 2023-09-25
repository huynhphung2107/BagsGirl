import './FormProductViewDetails.css';

import React, { Fragment, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, Table } from 'antd';
import baloDetailsAPI from '~/api/baloDetailsAPI';
import FormProductEdit from '../../ProductEdit/FormEdit/FormProductEdit';
const { Option } = Select;
function FormProductViewDetails(props) {
  const { baloCode } = props;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState(false);
  const [baloList, setBaloList] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await baloDetailsAPI.getAllByBaloCode(baloCode);
      const data = response.data;
      setBaloList(data);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

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
    },
    {
      title: 'Retails Price',
      dataIndex: 'retailPrice',
      fixed: 'right',
      width: 100,
      sorter: (a, b) => a.retailPrice - b.retailPrice,
    },
    {
      title: 'Amount',
      dataIndex: 'baloDetailAmount',
      fixed: 'right',
      width: 100,
      sorter: (a, b) => a.baloDetailAmount - b.baloDetailAmount,
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      fixed: 'right',
      render: (_, record) => (
        <Space size="middle">
          <FormProductEdit balo={record} />
        </Space>
      ),
    },
  ];

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      fetchProducts();
    }, 1000);
  };

  return (
    <Fragment>
      <a type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        ViewDetails
      </a>
      <Drawer
        title={'View Details'}
        placement="top"
        height={900} // max=900
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Edit
            </Button>
          </Space>
        }
      >
        <div>
          <div
            style={{
              marginBottom: 16,
            }}
          >
            <Button type="primary" onClick={start} loading={loading}>
              Reload
            </Button>
            <span
              style={{
                marginLeft: 8,
              }}
            ></span>
          </div>
          <Table
            rowKey={(record) => record.id}
            loading={loading}
            columns={columns}
            dataSource={baloList}
            onChange={''}
            pagination={pagination}
            scroll={{
              x: 1500,
              y: 500,
            }}
          />
        </div>
      </Drawer>
    </Fragment>
  );
}
export default FormProductViewDetails;
