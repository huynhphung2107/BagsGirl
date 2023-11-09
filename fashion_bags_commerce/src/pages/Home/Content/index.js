import { Fragment } from 'react';
import LayoutCarousel from './LayoutCarousel';
import styles from './index.module.scss';
import ProductList from './ProductList/ProductList';
import ExtendContent from './ExtendContent';

function Content() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className={styles.block}>
          <LayoutCarousel />
        </div>
        <div className={styles.block}>
          <ProductList titleContent={'NEW ARRIVAL'}></ProductList>
          <ProductList titleContent={'ONLINE DEAL (16.09 - 24.09)'}></ProductList>
          <ProductList titleContent={'SẢN PHẨM KHUYẾN MÃI'}></ProductList>
        </div>
      </div>
      <div className="container">
        <ExtendContent titleContent={'EVENT/TÀI TRỢ'}></ExtendContent>
      </div>
    </Fragment>
  );
}

export default Content;
