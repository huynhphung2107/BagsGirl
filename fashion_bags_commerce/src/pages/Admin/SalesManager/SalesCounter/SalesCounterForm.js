import React, { useRef, useState } from 'react';
import { AutoComplete, Button, Col, Form, Input, Popconfirm, Row, Select, Table, Tabs, notification } from 'antd';
import TableContent from '../../ProductManager/ProductViewer/Table/Table';
import styles from './index.module.scss';
import Title from 'antd/es/skeleton/Title';
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';
import TextArea from 'antd/es/input/TextArea';
import baloDetailsAPI from '~/api/baloDetailsAPI';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import userinfoAPI from '~/api/userInfoAPI';
import userInfoAPI from '~/api/userInfoAPI';
import VNDFormaterFunc from '~/Utilities/VNDFormaterFunc';
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
    const [customer, setCustomer] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [inputUserInfo, setInputUserInfo] = useState('');
    const [options, setOptions] = useState([]);
    const [infoList, setInfoList] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [visible, setVisible] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const [voucherPrice, setVoucherPrice] = useState(0);
    const [VATPrice, setVATPrice] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [form] = Form.useForm();

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
        setTotalPrice(calculateTotalPrice(updatedItems));
        notification.success({
          message: 'Thành Công',
          description: 'Số lượng đã được Update!!!!',
          duration: 2,
        });
      } else {
        const newItem = { ...item, cartAmount: 1 };
        setSelectedItems(selectedItems.concat(newItem));
        setTotalPrice(calculateTotalPrice(selectedItems.concat(newItem)));
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
    const handleSelectInfo = (value, option) => {
      setVisible(true);
      const item = infoList.find((item) => item.id === value);
      setCustomer(item);
      setInputUserInfo(option.children);
      form.setFieldsValue({
        fullName: item.fullName,
        phoneNumber: item.phoneNumber,
        address: item.address,
      });
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
    const onSearchInfo = async (value) => {
      setInputUserInfo(value);
      try {
        const response = await userInfoAPI.findByKeywork(value);
        const data = response.data;
        console.log(data);
        setInfoList(data);
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
      setTotalPrice(calculateTotalPrice(newSelectedItems));
    };
    const handleIncrease = (key) => {
      const updatedItems = selectedItems.map((item) => {
        if (item === key) {
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
      setTotalPrice(calculateTotalPrice(updatedItems));
    };

    const handleDecrease = (key) => {
      const updatedItems = selectedItems.map((item) => {
        if (item === key) {
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
      setTotalPrice(calculateTotalPrice(updatedItems));
    };
    const handleTonggleSelectChange = (value) => {
      if (value === '1') {
        setVisible(true); // Cập nhật trạng thái dựa trên giá trị của select
      }
      if (value === '0') {
        setVisible(false); // Cập nhật trạng thái dựa trên giá trị của select
      }
    };
    const calculateTotalPrice = (items) => {
      let total = 0;
      items.forEach((item) => {
        console.log(item.retailPrice, item.cartAmount);
        total += item.retailPrice * item.cartAmount;
      });
      const calculatedTotalPrice = total + total * 0.1 - voucherPrice;
      setTotalPayment(calculatedTotalPrice);
      return total;
    };

    const finnishPayment = () => {
      console.log('====================================');
      console.log(customer);
      console.log(selectedItems);
      console.log('====================================');
    };
    return (
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>Hóa Đơn {props.tabNum}</h1>
        </div>
        <div>
          <Row>
            <Col span={10} style={{ border: '1px solid' }} className={styles.form}>
              <div>
                <h5>Thông tin khách hàng</h5>
              </div>
              <div>
                <Form layout="vertical">
                  <Row>
                    <Col span={24}>
                      <Form.Item
                        label="Tìm kiếm Khách Hàng"
                        className={styles.item}
                        name="searchUserInfo"
                        rules={[
                          {
                            required: false,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <div className={styles.item}>
                          <AutoComplete
                            value={inputUserInfo}
                            style={{ width: 600 }}
                            onSelect={handleSelectInfo}
                            onChange={onSearchInfo}
                            placeholder="Nhập từ khóa tìm kiếm"
                          >
                            {infoList.map((o) => (
                              <Option key={o.id} value={o.id}>
                                {o.fullName + ' - ' + o.phoneNumber + ' - ' + o.email}
                              </Option>
                            ))}
                          </AutoComplete>
                        </div>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        label="Loại Khách Hàng"
                        className={styles.item}
                        name="customerType"
                        rules={[
                          {
                            required: false,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Select defaultValue="1" style={{ width: 120 }} onChange={handleTonggleSelectChange}>
                          <Option value="0">Khách Lẻ</Option>
                          <Option value="1">Khách Hàng Thân Thiết</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
                <Form layout="vertical" form={form}>
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label="MÃ HĐ"
                        initialValue={generateCustomCode('HD', 9)}
                        className={styles.item}
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
                  </Row>

                  {visible && (
                    <div>
                      <Row>
                        <Col span={12}>
                          <Form.Item label="Tên Khách Hàng" name="fullName" className={styles.item}>
                            <Input readOnly />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item label="SĐT Khách Hàng" name="phoneNumber">
                            <Input readOnly />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={12}>
                          <Form.Item className={styles.item} label="Địa chỉ" name="address">
                            <TextArea readOnly rows={6} placeholder="Địa Chỉ Chi tiết" maxLength={6} />
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
                    </div>
                  )}
                </Form>
                <Row>
                  <Col span={12}>
                    <div className={styles.item}>
                      <h6>Tổng tiền Sản Phẩm (1)</h6>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <h6>+ {VNDFormaterFunc(totalPrice)}</h6>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className={styles.item}>
                      <h6>Voucher (nếu có) (2)</h6>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <h6>- {VNDFormaterFunc(voucherPrice)}</h6>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className={styles.item}>
                      <h6>Thuế VAT 10 % (3) (~ {VNDFormaterFunc(totalPrice * 0.1)})</h6>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <h6>+ {VNDFormaterFunc(totalPrice * 0.1)}</h6>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className={styles.item}>
                      <h3>Tổng Tiền (1 - 2 + 3)</h3>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <h3>= {VNDFormaterFunc(totalPrice + totalPrice * 0.1 - voucherPrice)}</h3>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <Form.Item>
                      <Button onClick={finnishPayment}>Thêm Hóa Đơn</Button>
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={14} style={{ border: '1px solid', minHeight: '1000px' }} className={styles.form}>
              <div>
                <h5>Giỏ Hàng</h5>
              </div>
              <div>
                <div style={{ width: 'auto' }}>
                  <Form layout="vertical">
                    <Form.Item
                      label="Tìm kiếm Khách Hàng"
                      className={styles.item}
                      name="searchUserInfo"
                      rules={[
                        {
                          required: false,
                          message: 'Please input your username!',
                        },
                      ]}
                    >
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
                    </Form.Item>
                  </Form>
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
    <div className={styles.wrapper}>
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
