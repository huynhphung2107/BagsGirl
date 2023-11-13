import React, { useEffect, useState } from 'react';
import styles from './shopDetail.module.scss';
import { Image, Input } from 'antd';
import fullProductAPI from '~/api/client/fullProductAPI';
import { useParams } from 'react-router-dom';
import VNDFormaterFunc from '~/Utilities/VNDFormaterFunc';

function ShopDetailView() {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const handleInputChange = (event) => {
    // Kiểm tra nếu giá trị nhập vào không phải là số, thì không thay đổi giá trị của input
    if (/\D/g.test(event.target.value)) return;

    // Cập nhật giá trị quantity
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleIncrement = () => {
    // Tăng giá trị quantity khi nhấn nút '+'
    setQuantity(quantity + 1);
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
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetail();
  }, [productId]);

  const renderColorVariants = () => {
    if (!product || !product.productDetails) {
      return null;
    }

    return product.productDetails.map((variant, index) => (
      <div key={index} className={styles.colorVariant}>
        <h3>{variant.colorName}</h3>
        <p>Size: {variant.size}</p>
        <p>Price: {VNDFormaterFunc(variant.price)}</p>
        {/* Add other details specific to this color variant */}
      </div>
    ));
  };

  if (!product) {
    // You can render a loading state or an error message here
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-product">
      <div className="container">
        <div className="row custom-row">
          <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <div className={styles.group_images}>
              <div className={styles.image_main}>
                <Image src={product.imagesImgUrl} style={{ width: '700px', height: '450px' }}></Image>
              </div>
              <div>
                <Image
                  src={product.imagesImgUrl}
                  className={styles.image_child}
                  style={{ width: '236px', height: '150px' }}
                ></Image>
                <Image
                  src={product.imagesImgUrl}
                  className={styles.image_child}
                  style={{ width: '236px', height: '150px' }}
                ></Image>
                <Image
                  src={product.imagesImgUrl}
                  className={styles.image_child}
                  style={{ width: '236px', height: '150px' }}
                ></Image>
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
                          <span className={styles.labelName}>{product.productDetail.typeName}</span>
                        </li>
                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Kích thước (dài x rộng x cao): </span>
                          <span className={styles.labelName}>
                            {product.productDetail.sizeLength}cm x {product.productDetail.sizeWidth}cm x{' '}
                            {product.productDetail.sizeHeight}cm
                          </span>
                        </li>
                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Chất liệu: </span>
                          <span className={styles.labelName}>{product.productDetail.materialName}</span>
                        </li>
                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Kiểu khóa: </span>
                          <span className={styles.labelName}>{product.productDetail.buckleTypeName}</span>
                        </li>
                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Số ngăn: </span>
                          <span className={styles.labelName}>{product.productDetail.compartmentName}</span>
                        </li>
                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Kích cỡ: </span>
                          <span className={styles.labelName}>{product.productDetail.sizeName}</span>
                        </li>

                        <hr></hr>
                        <li className={styles.productDetailItem}>
                          <span className={styles.label}>Phù hợp sử dụng: </span>
                          <span className={styles.labelName}>Đi làm, đi chơi </span>
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
              <h1 className="title-product">
                {product.productName}-{product.brandName}-{product.productDetail.colorName}
              </h1>
              <hr></hr>
              <span className="price ">
                <h4>
                  <span className={styles.amount}>
                    {' '}
                    {product.productDetail ? VNDFormaterFunc(product.productDetail.retailPrice) : ''}
                  </span>
                </h4>
              </span>
              <hr></hr>
              <div className={styles.group_color}>
                {product.productDetail.colorName}
                {renderColorVariants()}
              </div>
              <br></br>
              <hr></hr>
              <div className="group-attr quantity cus-quantity">
                <h3 className="title-product">Số lượng:</h3>

                <div className=" title-attr">
                  <div className={styles.book_number}>
                    <div className={styles.item_change1} onClick={handleDecrement}>
                      -
                    </div>
                    <input
                      className={styles.input_amount}
                      value={quantity}
                      id="fquantity"
                      onChange={handleInputChange}
                    />
                    <div className={styles.item_change2} onClick={handleIncrement}>
                      +
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <hr></hr>
              <div className={styles.button_buy_now}>Mua ngay</div>
              {/* <div class="group-attr other-product cus-otherproduct">
                    <div class="title-attr">Sản phẩm cùng loại khác màu</div>
                    <ul class="list-attr">
                                                  <li><a href="https://www.vascara.com/tui-xach-tay/tui-tote-taco-xach-tay-tot-0148-mau-den"><img src="https://www.vascara.com/uploads/cms_productmedia/2023/November/1/tui-tote-taco-xach-tay---tot-0148---mau-den__72466__1698774128-medium.jpg" alt="Túi tote taco xách tay - TOT 0148 - Màu đen"></a></li>
                                            </ul>
                  </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetailView;
