import { Badge, Carousel } from 'antd';
import { Link } from 'react-router-dom';

import styles from '../MainHeader/mainheader.module.scss';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

function MainHeader() {
  return (
    <div className="container-fluid" style={{ height: '100px' }}>
      <div className={styles.mainHeader}>
        <img className={styles.image} alt="img" src="https://i.imgur.com/e1Tfbn5.png"></img>
        <div className={styles.content}>
          <div className={styles.toolLeft}></div>
          <div className={styles.search}>
            <div className={styles.searchForm}>
              <form className={styles.form}>
                <SearchOutlined className={styles.icon} />
                <input className={styles.searchInput} placeholder="Tìm kiếm sản phẩm"></input>
              </form>
            </div>
          </div>
          <div className={styles.toolRight}>
            <div className={styles.profile}>
              <div className={styles.login}>
                <ul className={styles.horizontalLogin}>
                  <li>
                    <Link to={'/login'}>ĐĂNG NHẬP</Link>
                  </li>
                  <span> / </span>
                  <li>
                    <Link to={'/login'}>ĐĂNG KÝ</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.cart}>
              <Link to={'/cart'}>
                <Badge className={styles.cartBadge} count="2">
                  <ShoppingCartOutlined href="/cart" className={styles.cartIcon} />
                </Badge>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
