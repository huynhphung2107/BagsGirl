import { Badge, Carousel } from 'antd';
import { Link } from 'react-router-dom';

import styles from '../MainHeader/index.scss';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

function MainHeader() {
  return (
    <div className="container-fluid" style={{ height: '100px' }}>
      <div className="mainHeader">
        <div className="content">
          <div className="toolLeft">
            <div className="logo">
              <img className="image" alt="img" src="https://i.imgur.com/OfgyXFE.png"></img>
            </div>
          </div>
          <div className="search">
            <div className="searchForm">
              <form className="form">
                <SearchOutlined className="icon" />
                <input className="searchInput" placeholder="Đây là ô tìm kiếm"></input>
              </form>
            </div>
          </div>
          <div className="toolRight">
            <div className="profile">
              <div className="login">
                <ul className="horizontalLogin">
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
            <div className="cart">
              <Link to={'/cart'}>
                <Badge className="cartBadge" count="1">
                  <ShoppingCartOutlined href="/cart" className="cartIcon" />
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
