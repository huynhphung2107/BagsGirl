import { Fragment } from 'react';
import styles from './footerClient.module.scss';

function Footer() {
  return (
       <div className={styles.container_fluid} >
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
            </p>
          </div>
        </div>
      </div>
  );
}

export default Footer;
