import { createContext, useEffect, useState } from 'react';
import baloAPI from '~/api/productsAPI';

export const BaloContext = createContext();

export const BaloProvider = ({ children }) => {
  const [baloList, setBaloList] = useState([]);

  function updateBaloList() {
    fetchProducts();
  }

  const fetchProducts = async () => {
    try {
      const response = await baloAPI.getAll();
      const data = response.data;
      setBaloList(data);
      setTimeout(() => {}, 300);
    } catch (error) {
      console.error('Đã xảy ra lỗi: ', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return <BaloContext.Provider value={{ baloList, updateBaloList }}>{children}</BaloContext.Provider>;
};
