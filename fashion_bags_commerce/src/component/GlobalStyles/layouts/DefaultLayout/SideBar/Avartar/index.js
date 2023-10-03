import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
function Avartar() {
  return (
    <div style={{ padding: '0px 0px 50px 0px' }}>
      <hr></hr>
      <Card
        hoverable
        style={{
          width: 200,
          height: 180,
          padding: '0px 0px 10px 0px',
        }}
        cover={
          <img
            alt="example"
            style={{ padding: '2px 20px', width: '200px' }}
            src="https://phunugioi.com/wp-content/uploads/2020/10/avatar-doremon-va-nobita.jpg"
          />
        }
      >
        <Meta title="Fashions Bags Shop" description="" />
      </Card>
    </div>
  );
}

export default Avartar;
