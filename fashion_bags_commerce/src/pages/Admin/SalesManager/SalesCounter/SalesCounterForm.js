import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';
import {
  AutoComplete,
  Button,
  Col,
  Form,
  Input,
  Popconfirm,
  Row,
  Select,
  Table,
  Tabs,
  message,
  notification,
} from 'antd';
import TableContent from '../../ProductManager/ProductViewer/Table/tableProduct';
import styles from './saleManager.module.scss';
import Title from 'antd/es/skeleton/Title';
import { generateCustomCode } from '~/Utilities/GenerateCustomCode';
import TextArea from 'antd/es/input/TextArea';
import baloDetailsAPI from '~/api/productDetailsAPI';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import userinfoAPI from '~/api/userInfoAPI';
import userInfoAPI from '~/api/userInfoAPI';
import VNDFormaterFunc from '~/Utilities/VNDFormaterFunc';
import customerAPI from '~/api/customerAPI';
import billsAPI from '~/api/BillApi';
import billDetailsAPI from '~/api/BillDetailsAPI';
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
    const [inputValue, setInputValue] = useState('abc');
    const [inputUserInfo, setInputUserInfo] = useState('');
    const [options, setOptions] = useState([]);
    const [infoList, setInfoList] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [visible, setVisible] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const [voucherPrice, setVoucherPrice] = useState(0);
    const [VAT, setVAT] = useState(0.1);
    const [totalPayment, setTotalPayment] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [staffId, setStaffId] = useState('');
    const [billInfo, setBillInfo] = useState({});
    const [form] = Form.useForm();
    const searchInputRef = useRef(null);

    const [messageApi, contextHolder] = message.useMessage();

    const handleCacuTotalAmount = () => {
      const total = selectedItems.reduce((total, product) => total + product.cartAmount, 0);

      setTotalAmount(total);
      return total;
    };

    const handleSelect = (value, option) => {
      const item = options.find((item) => item.productDetailId === value);
      console.log(item);
      setInputValue(item.product.productCode);
      if (item.productDetailAmount <= 0) {
        notification.error({
          message: 'Lỗi',
          description: `Hiện tại Sản Phẩm đang hết hàng!!!!`,
        });
      } else {
        if (isItemAlreadyAdded(item)) {
          const updatedItems = selectedItems.map((o) => {
            if (o.productDetailId === item.productDetailId) {
              const newCartAmount = o.cartAmount + 1;
              if (newCartAmount <= item.productDetailAmount) {
                return { ...o, cartAmount: newCartAmount };
              } else {
                notification.error({
                  message: 'Lỗi',
                  description: `Số lượng vượt quá giới hạn. Số lượng tối đa: ${item.productDetailAmount}`,
                });
                return o;
              }
            }
            return o;
          });
          setSelectedItems(updatedItems);
          setInputValue(item.product.productCode);
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
          setInputValue(item.productCode);

          notification.success({
            message: 'Thành Công',
            description: 'Sản Phẩm đã được thêm!!!!',
            duration: 2,
          });
        }
      }

      // setSelectedItems(selectedItems.concat(item));
      // setInputValue(item.productCode);
    };
    const handleSelectInfo = (value, option) => {
      setVisible(true);
      const item = infoList.find((item) => item.customerId === value);

      setCustomer(item);
      setInputUserInfo(option.children);
      form.setFieldsValue({
        fullName: item.users.fullName,
        phoneNumber: item.users.phoneNumber,
        address: item.users.address,
      });
    };

    const isItemAlreadyAdded = (item) => {
      return selectedItems.some((selectedItem) => selectedItem.productDetailId === item.productDetailId);
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
        const response = await customerAPI.findByKeywork(value);
        const data = response.data;
        setInfoList(data);
      } catch (error) {
        console.error('Đã xảy ra lỗi: ', error);
      }
    };
    const columns = [
      {
        title: 'Balo Code',
        dataIndex: ['product', 'productCode'],

        width: 200,
        sorter: (a, b) => a.product.productCode.localeCompare(b.product.productCode),
      },
      {
        title: 'Name Balo',
        dataIndex: ['product', 'productName'],
        width: 500,

        sorter: (a, b) => a.product.productName.localeCompare(b.product.productName),
      },

      {
        title: 'Size Balo',
        dataIndex: ['size', 'sizeName'],
        width: 100,
        sorter: (a, b) => a.size.sizeName.localeCompare(b.size.sizeName),
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
          if (item.cartAmount >= item.productDetailAmount) {
            notification.error({
              message: 'Lỗi',
              description: `Chỉ còn lại ${item.productDetailAmount} Sản phẩm trong Cửa hàng`,
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
      if (value === 0) {
        setVisible(true); // Cập nhật trạng thái dựa trên giá trị của select
      }
      if (value === 1) {
        setVisible(false); // Cập nhật trạng thái dựa trên giá trị của select
      }
    };
    const calculateTotalPrice = (items) => {
      let total = 0;
      items.forEach((item) => {
        total += item.retailPrice * item.cartAmount;
      });
      const calculatedTotalPrice = total + total * 0.1 - voucherPrice;
      setTotalPayment(calculatedTotalPrice);
      return total;
    };

    const finnishPayment = () => {
      form.submit();
    };
    const onHandleAddBill = async (values) => {
      var currentDate = new Date();
      var formattedDate = dayjs(currentDate).format('YYYY-MM-DD HH:mm:ss');
      if (customer == null && visible === true) {
        messageApi.error('Vui lòng Chọn Khách lẻ hoặc Điền KH Thân Thiết!!!');
      } else if (selectedItems.length === 0) {
        messageApi.error('Vui lòng chọn Sản Phẩm!!');
      } else {
        let addBill = {
          staff: {
            staffId: values.staffId,
          },
          customer: {
            customerId: customer.customerId,
          },
          voucher: null,
          billCode: values.billCode,
          billCreateDate: formattedDate,
          billDatePayment: formattedDate,
          billShipDate: null,
          billReceiverDate: formattedDate,
          billTotalPrice: totalPrice + totalPrice * VAT - voucherPrice,
          productAmount: handleCacuTotalAmount(),
          billPriceAfterVoucher: totalPrice + totalPrice * VAT - voucherPrice,
          shippingAddress: null,
          billingAddress: null,
          receiverName: null,
          shipPrice: null,
          orderEmail: null,
          orderPhone: null,
          paymentMethod: values.paymentMethod,
          billNote: values.billNote,
          billStatus: 1,
        };

        const addedBill = await handleAddBills(addBill);
        console.log(addedBill);
        await Promise.all(
          selectedItems.map(async (o) => {
            let billDetail = {
              bills: {
                billId: addedBill.billId,
              },
              productDetails: {
                productDetailId: o.productDetailId,
              },
              amount: o.cartAmount,
              price: o.retailPrice,
            };
            const billDetails = await handleAddBillDetails(billDetail); // Thêm thông tin chi tiết hóa đơn
            console.log(billDetails);
          }),
        );
      }
      setBillInfo(values);
    };
    async function handleAddBills(bill) {
      const response = await billsAPI.add(bill);
      return response.data;
    }
    async function handleAddBillDetails(billDetails) {
      const response = await billDetailsAPI.add(billDetails);
      return response.data;
    }
    const onFocusInput = () => {
      if (searchInputRef.current) {
        const currentInput = searchInputRef.current;
        console.log(currentInput);
        // currentInput.setSelectionRange(0, currentInput.value.length);
      }
    };
    return (
      <div className={styles.content}>
        {contextHolder}
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
                <Form
                  layout="vertical"
                  initialValues={{
                    customerType: 0,
                  }}
                >
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
                            style={{
                              width: 600,
                            }}
                            onSelect={handleSelectInfo}
                            onChange={onSearchInfo}
                            placeholder="Nhập từ khóa tìm kiếm"
                            disabled={!visible}
                          >
                            {infoList.map((o) => (
                              <Option key={o.customerId} value={o.customerId}>
                                {o.users.fullName +
                                  ' - ' +
                                  o.users.phoneNumber +
                                  ' - ' +
                                  o.users.email +
                                  ' - ' +
                                  o.users.account +
                                  ' - ' +
                                  o.users.address}
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
                        <Select
                          style={{
                            width: 240,
                          }}
                          options={[
                            {
                              value: 1,
                              label: 'Khách Lẻ',
                            },
                            {
                              value: 0,
                              label: 'KH Thân Thiết',
                            },
                          ]}
                          onChange={handleTonggleSelectChange}
                        ></Select>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
                <Form
                  layout="vertical"
                  form={form}
                  onFinish={onHandleAddBill}
                  initialValues={{
                    staffId: '3896092B-1782-4973-92A8-0DDE36F3A2D7',
                    paymentMethod: 1,
                    billNote: '',
                  }}
                >
                  <Row>
                    <Col span={12}>
                      <Form.Item
                        label="MÃ HĐ"
                        initialValue={generateCustomCode('HD', 9)}
                        className={styles.item}
                        name="billCode"
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
                        name="staffId"
                        className={styles.item}
                        rules={[
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input
                          readOnly
                          onChange={(value) => {
                            setStaffId(value);
                          }}
                        />
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
                            label="Loại Khách Hàng"
                            className={styles.item}
                            name="paymentMethod"
                            rules={[
                              {
                                required: false,
                                message: 'Please input your username!',
                              },
                            ]}
                          >
                            <Select
                              style={{
                                width: 240,
                              }}
                              options={[
                                {
                                  value: 1,
                                  label: 'Tiền Mặt',
                                },
                                {
                                  value: 0,
                                  label: 'Chuyển Khoản',
                                },
                              ]}
                              onChange={handleTonggleSelectChange}
                            ></Select>
                          </Form.Item>
                        </Col>
                      </Row>
                    </div>
                  )}
                  <Row>
                    <Col span={24}>
                      <Form.Item
                        label=""
                        name="billNote"
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
                        <h6>Thuế VAT 10 % (3) (~ {VNDFormaterFunc(totalPrice * VAT)})</h6>
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
                        <h3>= {VNDFormaterFunc(totalPrice + totalPrice * VAT - voucherPrice)}</h3>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <Button onClick={finnishPayment}>Thêm Hóa Đơn</Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col span={14} style={{ border: '1px solid', minHeight: '1000px' }} className={styles.form}>
              <div>
                <h5>Giỏ Hàng</h5>
              </div>
              <div>
                <div style={{ width: 'auto' }}>
                  <AutoComplete
                    style={{ width: 600 }}
                    onSelect={handleSelect}
                    onChange={onSearch}
                    value={inputValue}
                    placeholder="Nhập từ khóa tìm kiếm"
                    onFocus={onFocusInput}
                    ref={searchInputRef}
                  >
                    {options.map((option) => (
                      <Option key={option.productDetailId} value={option.productDetailId}>
                        {option.product.productName +
                          ' - ' +
                          option.retailPrice +
                          ' - ' +
                          option.size.sizeName +
                          ' - ' +
                          option.color.colorName +
                          ' - ' +
                          option.product.brand.brandName +
                          ' - ' +
                          option.compartment.compartmentName}
                      </Option>
                    ))}
                  </AutoComplete>

                  <Table
                    rowKey={(record) =>
                      record && record.retailPrice && record.color.colorName && record.product.productName
                    }
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
