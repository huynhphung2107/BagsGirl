import { Fragment } from 'react';
import LayoutCarousel from './LayoutCarousel';
import styles from './index.module.scss';
import ProductList from './ProductList/ProductList';
import ExtendContent from './ExtendContent';
import ShopView from '../Shop/ShopView/shopView';

function Content() {
  return (
    <Fragment>
      <LayoutCarousel />
      <ShopView titleContent={'SẢN PHẨM BÁN CHẠY'} />
      <ProductList titleContent={'SẢN PHẨM KHUYẾN MÃI'} />
      <ExtendContent titleContent={'EVENT/TÀI TRỢ'} />
    </Fragment>
  );
}

export default Content;
