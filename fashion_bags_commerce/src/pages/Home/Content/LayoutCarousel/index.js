import { Carousel } from 'antd';
import { Fragment } from 'react';

import styles from './index.module.scss';

function LayoutCarousel() {
  return (
    <Fragment>
      <div className={styles.carouselContent}>
        <Carousel draggable={true} autoplaySpeed={1500} autoplay={true}>
          <div>
            <h3 className={styles.item}>
              <img src="https://www.vascara.com/uploads/banner/2023/September/13/17181694601451.jpg"></img>
            </h3>
          </div>
          <div>
            <h3 className={styles.item}>
              <img src="https://www.vascara.com/uploads/banner/2023/September/13/17201694602063.jpg"></img>
            </h3>
          </div>
          <div>
            <h3 className={styles.item}>
              <img src="https://www.vascara.com/uploads/banner/2023/September/15/17451694753281.jpg"></img>
            </h3>
          </div>
          <div>
            <h3 className={styles.item}>
              <img src="https://www.vascara.com/uploads/banner/2023/September/14/17401694689019.jpg"></img>
            </h3>
          </div>
        </Carousel>
      </div>
      <div className={styles.collectionBanner}>
        <div className={styles.container}>
          <div className="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 item-banner">
              <a
                href="https://www.vascara.com/tui-deo-cheo/tui-deo-cheo-phong-cach-denim-khoa-xoay-sho-0228-mau-nau"
                aria-label="Bộ sưu tập vascara"
              >
                <img
                  className={styles.imgContent}
                  src="https://www.vascara.com/uploads/banner/2023/September/18/17221695020923.jpg"
                  data-src=""
                  alt="Bộ sưu tập vascara"
                />
              </a>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 item-banner">
              <a
                href="https://www.vascara.com/giay-bit/giay-slingback-quai-khoet-cach-dieu-bmn-0597-mau-be"
                aria-label="Bộ sưu tập vascara"
              >
                <img
                  className={styles.imgContent}
                  src="https://www.vascara.com/uploads/banner/2023/September/18/17241695021083.jpg"
                  data-src=""
                  alt="Bộ sưu tập vascara"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default LayoutCarousel;