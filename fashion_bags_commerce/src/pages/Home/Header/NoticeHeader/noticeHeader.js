import { Carousel } from 'antd';

import { Link } from 'react-router-dom';

import styles from './noticeHeader.module.scss';
function NoticeHeader() {
  return (
    <div className={styles.carouselHeader}>
      <Carousel className="carouselContent" dots={false} draggable={true} autoplaySpeed={1500} autoplay={true}>
        <div>
          <b>
            <p>
              <span className={styles.highlightText}>Xin trân trọng giới thiệu</span> 5 ANH EM SIÊU NHÂN GAO. <span className={styles.highlightText}>LIÊN HỆ: 0354903402</span>
            </p>
          </b>
        </div>
        <div>
          <b>
            <p>
              1 <span className={styles.highlightText}> GAO XANH</span> NGUYỄN CÔNG TUẤN ANH.
              <Link className={styles.highlightLink}> XEM NGAY</Link>
            </p>
          </b>
        </div>
        <div>
          <b>
            <p>
              2 <span className={styles.highlightText}> GAO HỒNG</span> NÔNG KIỀU OANH
              <Link className={styles.highlightLink}> XEM NGAY</Link>
            </p>
          </b>
        </div>
        <div>
          <b>
            <p>
              3 <span className={styles.highlightText}> GAO TRẮNG</span> HOÀNG THỊ THU DIỆP
              <Link className={styles.highlightLink}> XEM NGAY</Link>
            </p>
          </b>
        </div>
        <div>
          <b>
            <p>
              4 <span className={styles.highlightText}> GAO ĐỎ</span> NGUYỄN ĐÌNH ANH QUÂN
              <Link className={styles.highlightLink}> XEM NGAY</Link>
            </p>
          </b>
        </div>
        <div>
          <b>
            <p>
              5 <span className={styles.highlightText}> GAO BẠC</span> PHÙNG VĂN HUỲNH
              <Link className={styles.highlightLink}> XEM NGAY</Link>
            </p>
          </b>
        </div>
      </Carousel>
    </div>
  );
}

export default NoticeHeader;
