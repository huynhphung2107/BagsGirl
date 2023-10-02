import { Fragment } from 'react';
import styles from './index.module.scss';

function Footer() {
  return (
    <Fragment>
      <div className={styles.footer}>
        <div className={styles.mainFooter}>
          <div className={styles.container}>
            <div className="row">
              <ul>
                <li>
                  <a>
                    <img
                      className={styles.checkedImg}
                      src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
                    ></img>
                  </a>
                </li>
                <li>
                  <a>CỬA HÀNG</a>
                </li>
                <li>
                  <a>1900 8198 (1000đ/phút)</a>
                </li>
                <li>
                  <a>CỬA HÀNG</a>
                </li>
                <li>
                  <a>CÔNG TY</a>
                </li>
                <li>
                  <a>CHÍNH SÁCH KHÁCH HÀNG</a>
                </li>
                <li>
                  <a>HỖ TRỢ</a>
                </li>
                <li>
                  <a>PAYMENT METHOD</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <p>
            Công ty TNHH MTV Global Fashion. Văn phòng: Lầu 4 tòa nhà ACM số 96 Cao Thắng phường 04 quận 03 TP Hồ Chí
            Minh.
          </p>

          <p>
            GP số <span style={{ color: '#0090ff' }}>0314657558 </span>
            <span>do sở KHĐT Tp Hồ Chí Minh cấp lần đầu ngày 05/10/2017</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
