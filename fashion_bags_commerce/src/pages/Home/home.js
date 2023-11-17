import { Layout } from 'antd';
import Content from './Content';
import Footer from './Footer/footerClient';
import Header from './Header/headerCilent';

import styles from './home.module.scss';
import { Fragment, useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <body title="BagGirls">
        <div className={styles.fullpage}>
          <div className={styles.header001}>
            <Header />
          </div>
          <div className={styles.page_content}>
            <Content />
          </div>
          <div className={styles.footer_client}>
            <Footer />
          </div>
        </div>
      </body>
    </Fragment>
  );
}

export default Home;
