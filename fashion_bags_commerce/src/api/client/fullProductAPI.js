import axiosClient from '../axiosClient';

const fullProductAPI = {
  getAll() {
    const url = '/all-products/';
    return axiosClient.get(url, {});
  },
  findById(id) {
    const url = `/detail-product/${id}`;
    return axiosClient.get(url);
  },

  findProductByColor(id, colorId) {
    const url = `/detail-product?id=${id}&colorid=${colorId}`;
    return axiosClient.get(url);
  },
};
export default fullProductAPI;
