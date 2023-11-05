import { AudioOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import Search from 'antd/es/input/Search';
import Title from 'antd/es/typography/Title';
import NotificationIcon from './NotificationIcon';
import MessageIcon from './MessageIcon';
import PopupProfile from './PopupProfile';
import style from './index.module.scss';

const header = {
  // backgroundColor: '#ffffff',
  padding: '20px 0 0 40px',
  margin: '10px',
  backgroundColor: 'lightblue',
};

const headerIcons = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};
const wrapper = {};
function HeaderContent(props) {
  return (
    <header style={header}>
      <div className={wrapper}>
        <div className="row">
          <div className="col-md-4">
            <Title level={1}>{props.titlePage}</Title>
          </div>
          <div className="col-md-8">
            <div style={headerIcons}>
              <Search
                placeholder="input search text"
                enterButton="Search"
                style={{
                  width: 400,
                }}
                size="large"
                suffix={
                  <AudioOutlined
                    style={{
                      fontSize: 16,
                      color: '#1677ff',
                    }}
                  />
                }
                onSearch={(values) => {
                  console.log(values);
                }}
              />
              <Badge count={5}>
                <NotificationIcon />
              </Badge>
              <Badge count={9}>
                <MessageIcon />
              </Badge>
              <PopupProfile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderContent;
