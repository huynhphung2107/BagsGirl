import { Fragment } from 'react';

import styles from './index.module.scss';
import { Image } from 'antd';

function ExtendContent({ titleContent }) {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className={styles.block}>
          <div className={styles.container}>
            <div>
              <div>
                <div className={styles.titleBlock}>
                  <span>{titleContent}</span>
                  <a className={styles.viewAll}>Xem tất cả</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productList}>
            <div className={styles.container}>
              <div className="row">
                <div className="col-4">
                  <div className={styles.producItem}>
                    <div className={styles.productImage}>
                      <a>
                        <div className={styles.contentImage}>
                          <Image src="https://www.vascara.com/uploads/page/2023/September/18/20761695020769.jpg"></Image>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className={styles.producItem}>
                    <div className={styles.productImage}>
                      <a>
                        <div className={styles.contentImage}>
                          <Image src="https://www.vascara.com/uploads/page/2023/May/26/19981685090294.jpg"></Image>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className={styles.producItem}>
                    <div className={styles.productImage}>
                      <a>
                        <div className={styles.contentImage}>
                          <Image src="https://www.vascara.com/uploads/page/2023/April/14/19601681461167.jpg"></Image>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ExtendContent;
