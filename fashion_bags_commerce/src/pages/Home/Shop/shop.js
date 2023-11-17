import { Layout } from 'antd';
import Footer from '../Footer/footerClient';
import Header from '../Header/headerCilent';
import ShopView from './ShopView/shopView';

import styles from './shop.module.scss';
import { Link } from 'react-router-dom';
import { Fragment, useEffect } from 'react';



function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
    <body>
      <div className={styles.fullpage}>
        <div className={styles.header001}>
          <Header />
        </div>
        <div className={styles.page_content}>
          <ShopView />
        </div>
        <div className={styles.footer_client}>
          <Footer />
        </div>
      </div>
    </body>
  </Fragment>
  );
}

export default Shop;
