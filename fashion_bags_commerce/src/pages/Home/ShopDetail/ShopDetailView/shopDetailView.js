import React, { useEffect, useState } from 'react';
import styles from './shopDetailView.module.scss';
import { Checkbox, Image, Input, Select } from 'antd';
import fullProductAPI from '~/api/client/fullProductAPI';
import { Link, useParams } from 'react-router-dom';
import VNDFormaterFunc from '~/Utilities/VNDFormaterFunc';
import axios from 'axios';
import { data } from 'jquery';
import Icon from '@ant-design/icons/lib/components/Icon';
import { CarOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';

function ShopDetailView() {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [dataDetail, setDataDetail] = useState(null);

  const [temporaryCart, setTemporaryCart] = useState([]);
  const addToTemporaryCart = async (product) => {
    try {
      // Gọi API hoặc truy vấn cơ sở dữ liệu để lấy thông tin chi tiết sản phẩm
      const amountInDatabase = dataDetail.amount; // Số lượng tồn kho trong cơ sở dữ liệu

      if (quantity <= amountInDatabase) {
        const productToAdd = {
          image: product.img.imgUrl,
          productName: product.productName,
          colorName: dataDetail.colorName,
          materialName: dataDetail.materialName,
          brandName: product.brandName,
          quantity: quantity,
          retailPrice: dataDetail.retailPrice,
        };

        // Thêm sản phẩm vào giỏ hàng tạm thời
        const storedCart = localStorage.getItem('temporaryCart');
        let updatedTemporaryCart = [];

        if (storedCart) {
          updatedTemporaryCart = JSON.parse(storedCart);
          const existingProductIndex = updatedTemporaryCart.findIndex(
            (item) => item.productName === productToAdd.productName && item.colorName === productToAdd.colorName, // Thêm các điều kiện cần thiết để xác định sản phẩm (có thể sửa lại tùy theo cấu trúc dữ liệu của bạn)
          );

          if (existingProductIndex !== -1) {
            // Nếu sản phẩm đã tồn tại, cập nhật số lượng
            updatedTemporaryCart[existingProductIndex].quantity += quantity;
          } else {
            updatedTemporaryCart.push(productToAdd);
          }
          localStorage.setItem('temporaryCart', JSON.stringify(updatedTemporaryCart));
          setTemporaryCart(updatedTemporaryCart);
        }
      } else {
        // Hiển thị thông báo cho người dùng rằng số lượng không đủ trong kho
        alert('Số lượng không đủ trong kho!');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const handleInputChange = (event) => {
    // Kiểm tra nếu giá trị nhập vào không phải là số, thì không thay đổi giá trị của input
    // if (/\D/g.test(event.target.value)) return;
    console.log('>>>> value', event.target.value);

    // Cập nhật giá trị quantity
    // setQuantity(parseInt(event.target.value, 10));
  };

  const handleIncrement = () => {
    // Tăng giá trị quantity khi nhấn nút '+'
    const amountInDatabase = dataDetail.amount; // Số lượng tồn kho trong cơ sở dữ liệu

  if (quantity + 1 > amountInDatabase) {
    // Hiển thị thông báo khi số lượng vượt quá số lượng trong kho
    alert('Số lượng vượt quá số lượng trong kho!');
  } else {
    // Tăng giá trị quantity khi số lượng không vượt quá số lượng trong kho
    setQuantity(quantity + 1);
  }
  };

  const handleDecrement = () => {
    // Giảm giá trị quantity khi nhấn nút '-'
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fullProductAPI.findById(productId);
        const data = response.data;
        setProduct(data);
        setDataDetail(data?.productDetails[0]);
        console.log('>>>> data', data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetail();
  }, [productId]);

  console.log('>>> data detail', dataDetail);

  const handleColorChange = async (color) => {
    setSelectedColor(color);
  };

  const handleMaterialChange = (material) => {
    setSelectedMaterial(material);
  };

  const renderColor = () => {
    if (!product || !product.productDetails) {
      return null;
    }

    return product.productDetails.map((variant, index) => (
      <div key={index} className={styles.colorVariant}>
        <Checkbox
          checked={selectedColor === variant.colorName}
          onChange={() => {
            setDataDetail(product?.productDetails[index]);
            handleColorChange(variant.colorName);
          }}
        >
          {variant.colorName}
        </Checkbox>
      </div>
    ));
  };
  const renderMaterial = () => {
    if (!product || !product.productDetails) {
      return null;
    }

    return product.productDetails.map((variant, index) => (
      <div key={index} className={styles.materialrVariant}>
        <Checkbox
          checked={selectedMaterial === variant.materialName}
          onChange={() => handleMaterialChange(variant.materialName)}
        >
          {variant.materialName}
        </Checkbox>
      </div>
    ));
  };

  if (!product) {
    // You can render a loading state or an error message here
    return <div style={{ textAlign: 'left', fontSize: '20px' }}>Loading...</div>;
  }

  return (
    <div className="detail-product" style={{ margin: '0% 5% 0px 5%' }}>
      <div className="container">
        <div className="row custom-row">
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <div className={styles.group_images}>
              <div className={styles.image_main}>
                <Image src={product.img ? product.img.imgUrl : ''} style={{ width: '700px', height: '450px' }}></Image>
              </div>

              <div>
                {product.imgs &&
                  product.imgs.length > 0 &&
                  product.imgs.map((image, index) => (
                    <Image
                      key={index}
                      src={image.imgUrl}
                      className={styles.image_child}
                      style={{ width: '236px', height: '150px' }}
                    />
                  ))}
              </div>

              <br></br>
              <div className={styles.content_product_pc}>
                <div className={styles.group_content_product}>
                  <ul className={styles.head}>
                    <li className={styles.active}>
                      <h2>Thông tin chi tiết</h2>
                    </li>
                  </ul>
                  <div className={styles.body}>
                    <div className={styles.body_ct}>
                      <ul className="list-oppr">
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Thương hiệu: </span>
                          <span className={styles.labelName}>{product.brandName}</span>
                        </li>
                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Mã sản phẩm: </span>
                          <span className={styles.labelName}>{product.productCode}</span>
                        </li>
                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Loại sản phẩm: </span>
                          <span className={styles.labelName}>{dataDetail.typeName}</span>
                        </li>
                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Màu sắc: </span>
                          <span className={styles.labelName}>{dataDetail.colorName}</span>
                        </li>
                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Chất liệu: </span>
                          <span className={styles.labelName}>{dataDetail.materialName}</span>
                        </li>
                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Kích thước (dài x rộng x cao): </span>

                          <span className={styles.labelName}>
                            {product.productDetails &&
                              product.productDetails.length > 0 &&
                              `${dataDetail.sizeLength}cm x ${dataDetail.sizeWidth}cm x${dataDetail.sizeHeight}cm`}
                          </span>
                        </li>
                        <hr></hr>

                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Kiểu khóa: </span>
                          <span className={styles.labelName}>{dataDetail.buckleTypeName}</span>
                        </li>
                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Số ngăn: </span>
                          <span className={styles.labelName}>{dataDetail.compartmentName}</span>
                        </li>

                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Phù hợp sử dụng: </span>
                          <span className={styles.labelName}>{dataDetail.describe}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 fix-product">
            <div className="product-info">
              <h1 className={styles.title_product}>
                {product.productName}-{product.productCode}-{product.brandName}
              </h1>
              <span>
                <h4 className={styles.price}>{VNDFormaterFunc(dataDetail.retailPrice)}</h4>
              </span>
              <div className={styles.group_color}>
                <h3 style={{ fontStyle: 'italic', fontSize: '16pt' }}>Màu sắc</h3>{' '}
                <div className={styles.materialrVariant}>{renderColor()}</div>
              </div>
              <div className={styles.amount}>
                <h3 style={{ fontStyle: 'italic', fontSize: '16pt' }}>
                  Số lượng: <span style={{ color: 'red' }}>{dataDetail.amount}</span> sản phẩm
                </h3>

                <div className={' title_attr'}>
                  <div className={styles.book_number}>
                    <div className={styles.item_change1} onClick={handleDecrement}>
                      <MinusOutlined />
                    </div>
                    <input
                      className={styles.input_amount}
                      value={quantity}
                      id="quantity"
                      onChange={handleInputChange}
                    />
                    <div className={styles.item_change2} onClick={handleIncrement}>
                      <PlusOutlined />
                    </div>
                  </div>
                </div>
              </div>

              <br></br>
              <div className={styles.button_buy_now}>Mua ngay</div>
              <Link to="/cart">
                {/* Thêm sản phẩm vào giỏ hàng và chuyển hướng đến trang /cart */}
                <div className={styles.button_buy_now} onClick={() => addToTemporaryCart(product)}>
                  <ShoppingCartOutlined />
                  Thêm vào giỏ hàng
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetailView;
