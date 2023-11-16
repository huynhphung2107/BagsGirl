import { useEffect, useState } from "react";

import classes from './index.module.scss'
function Giohang({ setShowCart, cart, setCart }) {
  const [tongtien, setTongtien] = useState(0);

  const thaydoisoluong = (sanpham, sl) => {
    //tim san pham trong cart va thay doi mot luong sl
    const idx = cart.indexOf(sanpham);
    const arr = [...cart];
    arr[idx].amount += sl;
    if (arr[idx].amount == 0) arr[idx].amount = 1;
    setCart([...arr]);
  };

  const removeProduct = (sanpham) => {
    const arr = cart.filter((sp) => sp.id !== sanpham.id);
    setCart([...arr]);
  };
  // const tinhtongtien = () => {
  //   let tt = 0;
  //   cart.map((sp) => {
  //     tt += sp.price * sp.amount;
  //   });
  //   setTongtien(tt);
  // };

  //ham tinh tong tien tinh khi component dc render xong
  useEffect(() => {
    // tinhtongtien();
  });

  const onCloseCartHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      <h1>Gio hang</h1>
      {/* {cart.map((product) => (
        <div className={classes.row}>
          <div className={classes.img}>
            <img src={product.product_image} />
          </div>
          <div className={classes.title}>{product.name}</div>
          <div className={classes.controls}>
            <button onClick={() => thaydoisoluong(product, 1)}>+</button>
            <input type="text" value={product.amount} readOnly={true} />
            <button onClick={() => thaydoisoluong(product, -1)}>-</button>
          </div>
          <div className={classes.thanhtien}>
            {product.price * product.amount} VND
          </div>
          <button onClick={() => removeProduct(product)}>Remove</button>
        </div>
      ))} */}
      <hr></hr>
      {/* <h2>Tien can thanh toan: {tongtien}</h2> */}
      <button onClick={onCloseCartHandler}>Close Cart</button>
    </>
  );
}

export default Giohang;
