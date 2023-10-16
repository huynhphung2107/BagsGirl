import React, { useRef, useState } from 'react';
import { AutoComplete, Button, Col, Form, Input, Popconfirm, Row, Select, Table, Tabs, notification } from 'antd';
import TableContent from '../../ProductManager/ProductViewer/Table/Table';
import styles from './index.module.scss';
import Title from 'antd/es/skeleton/Title';
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';
import TextArea from 'antd/es/input/TextArea';
import baloDetailsAPI from '~/api/baloDetailsAPI';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
const { Option } = AutoComplete;

const SalesCounterForm = () => {
  const defaultPanes = new Array(2).fill(null).map((_, index) => {
    const id = String(index + 1);
    return {
      label: `HĐ ${id}`,
      children: <Content tabNum={id} />,
      key: id,
    };
  });
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [items, setItems] = useState(defaultPanes);
  const newTabIndex = useRef(3);
  const onChange = (key) => {
    setActiveKey(key);
  };

  const add = () => {
    const newActiveKey = `${newTabIndex.current++}`;
    setItems([
      ...items,
      {
        label: 'HĐ' + newActiveKey,
        children: <Content tabNum={newActiveKey} />,
        key: newActiveKey,
      },
    ]);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
      setActiveKey(key);
    }
    setItems(newPanes);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  function Content(props) {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const handleSelect = (value, option) => {
      const item = options.find((item) => item.id === value);

      if (isItemAlreadyAdded(item)) {
        const updatedItems = selectedItems.map((o) => {
          if (o.id === item.id) {
            const newCartAmount = o.cartAmount + 1;
            if (newCartAmount <= item.baloDetailAmount) {
              return { ...o, cartAmount: newCartAmount };
            } else {
              notification.error({
                message: 'Lỗi',
                description: `Số lượng vượt quá giới hạn. Số lượng tối đa: ${item.baloDetailAmount}`,
              });
              return o;
            }
          }
          return o;
        });
        setSelectedItems(updatedItems);
        setInputValue(item.baloCode);
        notification.success({
          message: 'Thành Công',
          description: 'Số lượng đã được Update!!!!',
          duration: 2,
        });
      } else {
        const newItem = { ...item, cartAmount: 1 };
        setSelectedItems(selectedItems.concat(newItem));
        setInputValue(item.baloCode);
        notification.success({
          message: 'Thành Công',
          description: 'Sản Phẩm đã được thêm!!!!',
          duration: 2,
        });
      }

      // setSelectedItems(selectedItems.concat(item));
      // setInputValue(item.baloCode);
    };
    const isItemAlreadyAdded = (item) => {
      return selectedItems.some((selectedItem) => selectedItem.id === item.id);
    };
    const onSearch = async (value) => {
      setInputValue(value);
      try {
        const response = await baloDetailsAPI.findByKeywork(value);
        const data = response.data;
        setOptions(data);
      } catch (error) {
        console.error('Đã xảy ra lỗi: ', error);
      }
    };
    const columns = [
      {
        title: 'Balo Code',
        dataIndex: 'baloCode',

        width: 200,
        sorter: (a, b) => a.baloCode.localeCompare(b.baloCode),
      },
      {
        title: 'Name Balo',
        dataIndex: 'baloName',
        width: 500,

        sorter: (a, b) => a.baloName.localeCompare(b.baloName),
      },

      {
        title: 'Size Balo',
        dataIndex: 'sizeName',
        width: 100,
        sorter: (a, b) => a.sizeName.localeCompare(b.sizeName),
      },
      {
        title: 'Retails Price',
        dataIndex: 'retailPrice',

        width: 100,
        sorter: (a, b) => a.retailPrice - b.retailPrice,
      },
      {
        title: 'Amount',
        dataIndex: 'cartAmount',
        width: 100,
        sorter: (a, b) => a.cartAmount - b.cartAmount,
        render: (text, record) => (
          <div>
            <Button onClick={() => handleIncrease(record)} size="small" icon={<PlusOutlined />}></Button>
            <span style={{ margin: '0 10px' }}>{text}</span>
            <Button onClick={() => handleDecrease(record)} size="small" icon={<MinusOutlined />}></Button>
          </div>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        width: 200,
        render: (text, record) => (
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa?"
            onConfirm={() => handleDelete(record)} // handleDelete là hàm để xử lý xóa
            okText="Yes"
            cancelText="No"
          >
            <Button>Xóa</Button>
          </Popconfirm>
        ),
      },
    ];
    const handleDelete = (key) => {
      const newSelectedItems = selectedItems.filter((item) => item !== key);
      setSelectedItems(newSelectedItems);
    };
    const handleIncrease = (key) => {
      const updatedItems = selectedItems.map((item) => {
        if (item === key) {
          console.log('====================================');
          console.log(item.baloDetailAmount);
          console.log('====================================');
          if (item.cartAmount >= item.baloDetailAmount) {
            notification.error({
              message: 'Lỗi',
              description: `Chỉ còn lại ${item.baloDetailAmount} Sản phẩm trong Cửa hàng`,
            });
          } else {
            return { ...item, cartAmount: item.cartAmount + 1 };
          }
        }
        return item;
      });
      setSelectedItems(updatedItems);
    };

    const handleDecrease = (key) => {
      const updatedItems = selectedItems.map((item) => {
        if (item === key) {
          console.log('====================================');
          console.log(item.baloDetailAmount);
          console.log('====================================');
          if (item.cartAmount === 1) {
            notification.error({
              message: 'Lỗi',
              description: 'Số lượng không thể nhỏ hơn 0',
            });
          } else {
            return { ...item, cartAmount: item.cartAmount - 1 };
          }
        }
        return item;
      });
      setSelectedItems(updatedItems);
    };

    return (
      <div>
        <div>
          <h1 className={styles.title}>Hóa Đơn {props.tabNum}</h1>
        </div>
        <div>
          <Row>
            <Col span={10} className={styles.form}>
              <div>
                <h5>Thông tin khách hàng</h5>
              </div>
              <div>
                <Form layout="vertical">
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label=" "
                        name=""
                        className={styles.item}
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input placeholder="Search By Name or Phone Number" />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Loại Khách"
                        name="type"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Select
                          defaultValue="lucy"
                          style={{
                            width: 120,
                          }}
                          options={[
                            {
                              value: '0',
                              label: 'Khách Lẻ',
                            },
                            {
                              value: '1',
                              label: 'Khách Thân Thiết',
                            },
                          ]}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item
                        label="MÃ HĐ"
                        initialValue={generateCustomCode('HD', 9)}
                        name="maHD"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input readOnly />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label="Nhân Viên"
                        name="nameStaff"
                        initialValue={'Nguyễn Công Tuấn Anh'}
                        className={styles.item}
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input readOnly />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="SĐT Khách Hàng"
                        name="phoneNumber"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        className={styles.item}
                        label="Địa chỉ"
                        name="phoneNumber"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        className={styles.item}
                        label=""
                        name="huyen"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        className={styles.item}
                        label=""
                        name="phoneNumber"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label=" "
                        name="phoneNumber"
                        rules={[
                          {
                            required: false,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <TextArea rows={6} placeholder="Địa Chỉ Chi tiết" maxLength={6} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label="Mã Giảm Giá (nếu có)"
                        name="disCountCode"
                        className={styles.item}
                        rules={[
                          {
                            required: false,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input readOnly />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Tổng Tiền Hàng"
                        name="totalPrice"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label="Phương thức Thanh Toán"
                        name="phoneNumber"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Select
                          defaultValue="cash"
                          style={{
                            width: 280,
                          }}
                          options={[
                            {
                              value: 'online',
                              label: 'Chuyển Khoản',
                            },
                            {
                              value: 'cash',
                              label: 'Tiền Mặt',
                            },
                          ]}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}></Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item
                        label=""
                        name="phoneNumber"
                        rules={[
                          {
                            required: false,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <TextArea rows={6} placeholder="Ghi chú" maxLength={6} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Form.Item>
                        <Button>Thêm Hóa Đơn</Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col span={14} style={{ border: '1px solid' }}>
              <div>
                <h5>Giỏ Hàng</h5>
              </div>
              <div>
                <div style={{ width: 'auto' }}>
                  <AutoComplete
                    value={inputValue}
                    style={{ width: 600 }}
                    onSelect={handleSelect}
                    onChange={onSearch}
                    placeholder="Nhập từ khóa tìm kiếm"
                  >
                    {options.map((option) => (
                      <Option key={option.id} value={option.id}>
                        {option.baloName +
                          ' - ' +
                          option.retailPrice +
                          ' - ' +
                          option.sizeName +
                          ' - ' +
                          option.colorName +
                          ' - ' +
                          option.baloBrandName +
                          ' - ' +
                          option.compartmentName}
                      </Option>
                    ))}
                  </AutoComplete>
                  <Table
                    rowKey={(record) => record && record.retailPrice}
                    dataSource={selectedItems}
                    columns={columns}
                    style={{ marginTop: '20px' }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={add}>ADD</Button>
      </div>
      <Tabs hideAdd onChange={onChange} activeKey={activeKey} type="editable-card" onEdit={onEdit} items={items} />
    </div>
  );
};

export default SalesCounterForm;
