const { BellOutlined } = require('@ant-design/icons');
const { Popover, Badge } = require('antd');

const NotificationContent = (
  <div>
    {/* Hiển thị danh sách thông báo ở đây */}
    <div>Thông báo 1</div>
    <div>Thông báo 2</div>
    {/* Thêm nội dung thông báo khác nếu cần */}
  </div>
);

const NotificationIcon = () => {
  return (
    <Popover content={NotificationContent} title="Thông báo" trigger="click">
      <Badge count={5} style={{ cursor: 'pointer' }}>
        <BellOutlined style={{ fontSize: '24px', marginRight: '0px', marginLeft: '20px', cursor: 'pointer' }} />
      </Badge>
    </Popover>
  );
};

export default NotificationIcon;
