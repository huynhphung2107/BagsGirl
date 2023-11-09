import React, { Fragment, useState } from 'react';
import { Image } from 'antd';

import styles from './index.module.scss';

function ShopView({ titleContent }) {
  return (
    <Fragment>
      <div className="container">
        <div className={styles.productList}>
          <div className="row">
            <div className="col-3">
              <div className={styles.producItem}>
                <div className={styles.productImage}>
                  <a>
                    <div className={styles.contentImage}>
                      <Image src="https://www.vascara.com/uploads/cms_productmedia/2023/August/31/tui-deo-cheo-may-chan-hinh-vuong---sho-0213---mau-kem__71508__1693427949-medium.jpg"></Image>
                    </div>
                  </a>
                </div>
                <div className={styles.describer}>
                  <span className={styles.productPrice}>
                    <ins>
                      <span className={styles.productTitle}>9384</span>
                      <span>đ</span>
                    </ins>
                  </span>
                  <div className={styles.productTitle}>Giày Slingback nhấn quai</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.producItem}>
                <div className={styles.productImage}>
                  <a>
                    <div className={styles.contentImage}>
                      <Image src="https://www.vascara.com/uploads/cms_productmedia/2023/August/31/tui-tote-over-size-quai-doi-that-nut---tot-0129---mau-den__71544__1693428905-medium.jpg"></Image>
                    </div>
                  </a>
                </div>
                <div className={styles.describer}>
                  <span className={styles.productPrice}>
                    <ins>
                      <span className={styles.amount}>9384</span>
                      <span>đ</span>
                    </ins>
                  </span>
                  <div className={styles.productTitle}>Giày Slingback nhấn quai</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.producItem}>
                <div className={styles.productImage}>
                  <a>
                    <div className={styles.contentImage}>
                      <Image src="https://www.vascara.com/uploads/cms_productmedia/2023/August/31/giay-slingback-nhan-quai-ankle-strap---bmn-0600---mau-do__71387__1693424341-medium.jpg"></Image>
                    </div>
                  </a>
                </div>
                <div className={styles.describer}>
                  <span className={styles.productPrice}>
                    <ins>
                      <span className={styles.amount}>9384</span>
                      <span>đ</span>
                    </ins>
                  </span>
                  <div className={styles.productTitle}>Giày Slingback nhấn quai</div>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className={styles.producItem}>
                <div className={styles.productImage}>
                  <a>
                    <div className={styles.contentImage}>
                      <Image src="https://www.vascara.com/uploads/cms_productmedia/2023/August/31/tui-deo-cheo-nap-gap-nhan-dinh-tan---sho-0234---mau-bac__71586__1693430324-medium@2x.jpg"></Image>
                    </div>
                  </a>
                </div>
                <div className={styles.describer}>
                  <span className={styles.productPrice}>
                    <ins>
                      <span className={styles.amount}>9384</span>
                      <span>đ</span>
                    </ins>
                  </span>
                  <div className={styles.productTitle}>Giày Slingback nhấn quai</div>
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>

          <div className="row">
            <div className="col-3">
              <div className={styles.producItem}>
                <div className={styles.productImage}>
                  <a>
                    <div className={styles.contentImage}>
                      <Image src="https://www.vascara.com/uploads/cms_productmedia/2023/August/31/giay-slingback-nhan-quai-ankle-strap---bmn-0600---mau-do__71387__1693424341-medium.jpg"></Image>
                    </div>
                  </a>
                </div>
                <div className={styles.describer}>
                  <span className={styles.productPrice}>
                    <ins>
                      <span className={styles.amount}>9384</span>
                      <span>đ</span>
                    </ins>
                  </span>
                  <div className={styles.productTitle}>Giày Slingback nhấn quai</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.producItem}>
                <div className={styles.productImage}>
                  <a>
                    <div className={styles.contentImage}>
                      <Image src="https://www.vascara.com/uploads/cms_productmedia/2023/August/31/tui-deo-cheo-nap-gap-nhan-dinh-tan---sho-0234---mau-bac__71586__1693430324-medium@2x.jpg"></Image>
                    </div>
                  </a>
                </div>
                <div className={styles.describer}>
                  <span className={styles.productPrice}>
                    <ins>
                      <span className={styles.amount}>9384</span>
                      <span>đ</span>
                    </ins>
                  </span>
                  <div className={styles.productTitle}>Giày Slingback nhấn quai</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.producItem}>
                <div className={styles.productImage}>
                  <a>
                    <div className={styles.contentImage}>
                      <Image src="https://www.vascara.com/uploads/cms_productmedia/2023/August/31/tui-tote-over-size-quai-doi-that-nut---tot-0129---mau-den__71544__1693428905-medium.jpg"></Image>
                    </div>
                  </a>
                </div>
                <div className={styles.describer}>
                  <span className={styles.productPrice}>
                    <ins>
                      <span className={styles.amount}>9384</span>
                      <span>đ</span>
                    </ins>
                  </span>
                  <div className={styles.productTitle}>Giày Slingback nhấn quai</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.producItem}>
                <div className={styles.productImage}>
                  <a>
                    <div className={styles.contentImage}>
                      <Image src="https://www.vascara.com/uploads/cms_productmedia/2023/August/31/tui-deo-cheo-may-chan-hinh-vuong---sho-0213---mau-kem__71508__1693427949-medium.jpg"></Image>
                    </div>
                  </a>
                </div>
                <div className={styles.describer}>
                  <span className={styles.productPrice}>
                    <ins>
                      <span className={styles.amount}>9384</span>
                      <span>đ</span>
                    </ins>
                  </span>
                  <div className={styles.productTitle}>Giày Slingback nhấn quai</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ShopView;
