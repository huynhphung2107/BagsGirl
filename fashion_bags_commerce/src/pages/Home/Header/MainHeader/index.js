import { Badge, Carousel } from 'antd';
import { Link } from 'react-router-dom';

import styles from '../MainHeader/index.scss';
import { SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';

function MainHeader() {
  return (
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
                  <a href="/login">ĐĂNG KÝ</a>
                </li>
                <span> / </span>
                <li>
                  <a href="/login">ĐĂNG NHẬP</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="cart">
            <a href="/cart">
              <Badge className="cartBadge" count="1">
                <ShoppingCartOutlined href="/cart" className="cartIcon" />
              </Badge>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
