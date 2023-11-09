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
              <img src="https://thoitrangthaiha.com/upload/hinhanh/slider-1208.png"></img>
            </h3>
          </div>
          <div>
            <h3 className={styles.item}>
              <img src="https://tuixachkimlong.vn/wp-content/uploads/sale-banner.jpg"></img>
            </h3>
          </div>
          <div>
            <h3 className={styles.item}>
              <img src="https://balotunghai.com/wp-content/uploads/2017/09/Banner2-1.jpg"></img>
            </h3>
          </div>
        </Carousel>
      </div>
      <div className={styles.collectionBanner}>
        <div className={styles.container}>
          <div className="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 item-banner">
              <a href="#" aria-label="Bộ sưu tập vascara">
                <img
                  className={styles.imgContent}
                  src="https://www.vascara.com/uploads/cms_productmedia/2023/August/31/giay-slingback-nhan-quai-ankle-strap---bmn-0600---mau-do__71387__1693424341-medium.jpg"
                  data-src=""
                  alt="Bộ sưu tập vascara"
                />
              </a>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 item-banner">
              <a href="#" aria-label="Bộ sưu tập vascara">
                <img
                  className={styles.imgContent}
                  src="https://www.vascara.com/uploads/cms_productmedia/2023/August/31/giay-slingback-nhan-quai-ankle-strap---bmn-0600---mau-do__71387__1693424341-medium.jpg"
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
