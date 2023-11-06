import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
function Avartar() {
  return (
    <div style={{ padding: '0px 0px 50px 0px' }}>
      <br />

      <Card
        hoverable
        style={{
          width: 200,
          height: 180,
          padding: '0px 0px 10px 0px',
          backgroundColor: 'lightsteelblue',
          borderRadius: '20% 5% 20% 5%',
        }}
        cover={
          <img
            alt="avatar shop"
            style={{ width: '180px', height: '160px', borderRadius: '20% 5% 20% 5%', margin: '10px 10px 10px 10px' }}
            src="https://i.imgur.com/7b05uoj.png"
          />
        }
      >
        <Meta title="Fashions Bags Shop" description="" />
      </Card>
    </div>
  );
}

export default Avartar;
