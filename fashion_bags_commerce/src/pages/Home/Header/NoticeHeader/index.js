import { Carousel } from 'antd';
import { Link } from 'react-router-dom';

import '../NoticeHeader/index.scss';

function NoticeHeader() {
  return (
    <div className="carouselHeader">
      <Carousel className="carouselContent" dots={false} draggable={true} autoplaySpeed={1500} autoplay={true}>
        <div>
          <b>
            <p>
              <span className="highlightText">GIAO HÀNG TRONG NGÀY</span> ÁP DỤNG CHO TẤT CẢ CÁC CỬA HÀNG TRÊN TOÀN
              QUỐC. <span className="highlightText">LIÊN HỆ: 1900 8198</span>
            </p>
          </b>
        </div>
        <div>
          <b>
            <p>
              TẶNG <span className="highlightText">1 GẤU BÔNG SIZE X</span> CHO HÓA ĐƠN TỪ 599K.
              <Link className="highlightLink"> XEM NGAY</Link>
            </p>
          </b>
        </div>
        <div>
          <b>
            <p>
              GIẢM <span className="highlightText">100% PHÍ VẬN CHUYỂN (TỐI ĐA 50K)</span> CHO HÓA ĐƠN TỪ 799K.
              <Link className="highlightLink"> XEM NGAY</Link>
            </p>
          </b>
        </div>
        <div>
          <b>
            <p>
              TẶNG <span className="highlightText">1 THỎ BÔNG LUNA BUNNY</span> CHO HÓA ĐƠN TỪ 1.099K.
              <Link className="highlightLink"> XEM NGAY</Link>
            </p>
          </b>
        </div>
      </Carousel>
    </div>
  );
}

export default NoticeHeader;
