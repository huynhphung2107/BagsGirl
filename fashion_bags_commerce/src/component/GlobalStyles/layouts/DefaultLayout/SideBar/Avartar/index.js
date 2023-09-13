import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Avatar from 'antd/es/avatar/avatar';
const { Meta } = Card;
function Avartar() {
  return (
    <Card
      style={{
        width: 200,
      }}
      cover={<Avatar shape="square" size={100} icon={<h1>LOGO</h1>} />}
      actions={''}
    >
      <Meta avatar={''} title="Tên Nhân Viên" />
    </Card>
  );
}

export default Avartar;
