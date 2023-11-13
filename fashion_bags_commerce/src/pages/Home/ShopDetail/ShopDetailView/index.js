import styles from './shopDetail.module.scss';
import { Image } from 'antd';

function ShopDetailView() {
  return (
    <div className="detail-product">
      <div className="container">
        <div className="row custom-row">
          <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <div class="group-images">
              <div>
                <Image src="https://www.vascara.com/uploads/cms_productmedia/2023/August/31/tote-canvas-nhan-ngan-phu---tot-0133---mau-kem__71473__1693426843-medium@2x.jpg"></Image>
              </div>
              <div class="content-product pc">
                <div class="group-content-product">
                  <ul class="head">
                    <li data-tab="1" class="active">
                      <h2>Thông tin chi tiết</h2>
                    </li>
                    <li data-tab="2">
                      <h2>Hướng dẫn bảo quản</h2>
                    </li>
                  </ul>
                  <div class="body">
                    <div data-tab="1" class="body-ct">
                      <ul class="list-oppr">
                        <li>
                          <span>Thương hiệu</span>
                          <span>VASCARA</span>
                        </li>
                        <li>
                          <span>Mã sản phẩm</span>
                          <span>1011TOT0133</span>
                        </li>
                        <li>
                          <span>Loại sản phẩm</span>
                          <span>Túi Xách Tay</span>
                        </li>
                        <li>
                          <span>Kích thước (dài x rộng x cao)</span>
                          <span>40 x 14.2 x 26.7 cm</span>
                        </li>
                        <li>
                          <span>Chất liệu</span>
                          <span>Canvas </span>
                        </li>
                        <li>
                          <span>Chất liệu dây đeo</span>
                          <span>Vải </span>
                        </li>
                        <li>
                          <span>Kiểu khóa</span>
                          <span>Khóa kéo </span>
                        </li>
                        <li>
                          <span>Chiều dài dây đeo</span>
                          <span>20 - 35 cm</span>
                        </li>
                        <li>
                          <span>Số ngăn</span>
                          <span>1 ngăn lớn, 8 ngăn nhỏ </span>
                        </li>
                        <li>
                          <span>Kích cỡ</span>
                          <span>Lớn </span>
                        </li>
                        <li>
                          <span>Phù hợp sử dụng</span>
                          <span>Đi làm, đi chơi </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetailView;
