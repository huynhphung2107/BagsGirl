import { Button, Carousel } from 'antd';
import { Fragment, useState, useRef } from 'react';

import styles from './index.module.scss';

function LayoutCarousel() {
  return (
    <Fragment>
      <div className={styles.banner}>
        <Carousel autoplay={true} autoplaySpeed={1500} draggable={true}>
          <div>
            <img
              src="https://www.vascara.com/uploads/banner/2023/November/14/17421699974436.jpg"
              alt="TEACHER'S DAY 2023"
              className="d-block w-100"
            />
          </div>
          <div className="carousel_item">
            <img
              alt="TEACHER'S DAY"
              className="d-block w-100"
              src="https://www.vascara.com/uploads/banner/2023/November/15/17451700018159.jpg"
            ></img>
          </div>
          <div className="carousel_item">
            <img
              alt="NEW ARRIVAL - T10"
              className="d-block w-100"
              src="https://www.vascara.com/uploads/banner/2023/November/1/17381698802488.jpg"
            ></img>
          </div>
          <div className="carousel_item">
            <img
              alt="BLACK FRIDAY - 50%"
              className="d-block w-100"
              src="https://www.vascara.com/uploads/banner/2023/November/17/17471700188478.png"
            ></img>
          </div>
        </Carousel>
      </div>

      <div className={styles.block}>
        <div className="container">
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
