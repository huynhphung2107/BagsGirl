import axiosClient from './axiosClient';

const productAPI = {
  getAll(pageNum, pageSize) {
    const url = '/product';
    return axiosClient.get(url, {
      params: {
        page: pageNum - 1,
        size: pageSize,
      },
    });
  },
  get(id) {
    const url = `/product?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/product`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/product?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(productID, status) {
    const url = `/product/update-status?productID=${productID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/product?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default productAPI;
