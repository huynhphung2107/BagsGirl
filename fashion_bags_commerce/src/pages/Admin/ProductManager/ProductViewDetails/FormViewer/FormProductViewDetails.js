import './FormProductViewDetails.css';

import React, { Fragment, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space, Table } from 'antd';
import baloDetailsAPI from '~/api/productDetailsAPI';
import FormProductEdit from '../../ProductEdit/FormEdit/FormProductEdit';
const { Option } = Select;
function FormProductViewDetails(props) {
  const { productCode } = props;
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    fetchProducts(productCode);
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

  const fetchProducts = async (baloCode) => {
    setLoading(true);

    try {
      const response = await baloDetailsAPI.getAllByProductId(baloCode);
      const data = response.data;
      console.log(data);
      console.log('Đây là productCode:', baloCode);
      setBaloList(data);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };
  useEffect(() => {
    if (productCode && open) {
      fetchProducts(productCode);
    }
  }, [productCode]);

  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      width: 50,
      fixed: 'left',
      render: (text, record, index) => <span>{(pagination.current - 1) * pagination.pageSize + index + 1}</span>,
    },
    {
      title: 'Balo Code',
      dataIndex: ['product', 'productCode'],
      width: 100,
      fixed: 'left',
      sorter: (a, b) => a.product.productCode.localeCompare(b.product.ButtonproductCode),
    },
    {
      title: 'Balo Name',
      dataIndex: ['product', 'productName'],
      width: 300,
      fixed: 'left',
      sorter: (a, b) => a.product.productName.localeCompare(b.product.productName),
    },
    {
      title: 'Balo Color',
      dataIndex: ['color', 'colorName'],
      width: 100,
      sorter: (a, b) => a.color.colorName.localeCompare(b.color.colorName),
    },
    {
      title: 'Type Balo',
      dataIndex: ['type', 'typeName'],
      width: 200,
      sorter: (a, b) => a.type.typeName.localeCompare(b.type.typeName),
    },
    {
      title: 'Material Balo',
      dataIndex: ['material', 'materialName'],
      width: 100,
      sorter: (a, b) => a.material.materialName.localeCompare(b.material.materialName),
    },
    {
      title: 'Size Balo',
      dataIndex: ['size', 'sizeName'],
      width: 100,
      sorter: (a, b) => a.size.sizeName.localeCompare(b.size.sizeName),
    },
    {
      title: 'Brand Balo',
      dataIndex: ['product', 'brand', 'brandName'],
      width: 100,
      sorter: (a, b) => a.product.brand.brandName.localeCompare(b.product.brandbrandName),
    },
    {
      title: 'Compartment Balo',
      dataIndex: ['compartment', 'compartmentName'],
      width: 100,
      sorter: (a, b) => a.compartment.compartmentName.localeCompare(b.compartment.compartmentName),
    },
    {
      title: 'Image Url',
      dataIndex: 'imageUrl',
      width: 300,
      sorter: (a, b) => a.imageUrl.localeCompare(b.imageUrl),
    },
    {
      title: 'Producer Balo',
      dataIndex: ['producer', 'producerName'],
      width: 100,
      sorter: (a, b) => a.producer.producerName.localeCompare(b.producer.producerName),
    },

    {
      title: 'Describe',
      dataIndex: 'productDetailDescribe',
      width: 500,
      sorter: (a, b) => a.productDetailDescribe.localeCompare(b.productDetailDescribe),
    },
    {
      title: 'Status',
      dataIndex: 'productDetailStatus',
      width: 100,
      sorter: (a, b) => a.productDetailStatus - b.productDetailStatus,
      render: (productDetailStatus) => {
        switch (productDetailStatus) {
          case 1:
            return 'Hoạt động';
          case 0:
            return 'Không hoạt động';
          case -1:
            return 'Trạng thái khác';
          default:
            return 'Không xác định';
        }
      },
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
      dataIndex: 'productDetailAmount',
      fixed: 'right',
      width: 100,
      sorter: (a, b) => a.productDetailAmount - b.productDetailAmount,
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
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        ViewDetails
      </Button>
      <Drawer
        title={'View Details'}
        placement="top"
        height={900} // max=900
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
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
            rowKey={(record) => record.productDetailId}
            loading={loading}
            columns={columns}
            dataSource={baloList}
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
