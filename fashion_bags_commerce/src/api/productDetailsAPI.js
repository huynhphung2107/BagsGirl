import axiosClient from './axiosClient';

const productDetailsAPI = {
  getAll(params) {
    const url = '/product-detail/';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/product-detail?id=${id}`;
    return axiosClient.get(url);
  },
  getAllByProductId(productId) {
    const url = `/product-detail/${productId}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/product-detail`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/product-detail?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  delete(id) {
    const url = `/product-detail?id=${id}`;
    return axiosClient.delete(url);
  },
  findByKeywork(keyword) {
    const url = `/product-detail/search?keyword=${keyword}`;
    return axiosClient.get(url, { keyword });
  },
};

export default productDetailsAPI;
