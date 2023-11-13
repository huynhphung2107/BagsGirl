import { Fragment } from 'react';
import styles from './index.module.scss';

function Footer() {
  return (
    <Fragment>
      <div className="container-fluid" style={{ background: '#f5f5f5' }}>
        <div className={styles.footer} style={{ background: '#f5f5f5' }}>
          <div className={styles.mainFooter} style={{ background: '#f5f5f5' }}>
            <div className={styles.container} style={{ background: '#f5f5f5' }}>
              <div className="row" style={{ background: '#f5f5f5' }}>
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
                    <a>1900 1508 (1 năm không tắm)</a>
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
            <p>Công ty TNHH MTV Global Fashion. Văn phòng: Lầu Túy Tiên, Tỉnh Vân Vân, Thành phố Phượt Thủ</p>

            <p>
              GP số <span style={{ color: '#0090ff' }}>0354903402 </span>
              <span>do cơ sở có cai gì đó</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
