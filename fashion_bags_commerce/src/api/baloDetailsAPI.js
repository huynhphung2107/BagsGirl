import axiosClient from './axiosClient';

const baloDetailsAPI = {
  getAll(params) {
    const url = '/balo-detail/';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/balo-detail?id=${id}`;
    return axiosClient.get(url);
  },
  getAllByBaloCode(baloCode) {
    const url = `balo/${baloCode}/balodetails`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/balo-detail`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/balo-detail?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  delete(id) {
    const url = `/balo-detail?id=${id}`;
    return axiosClient.delete(url);
  },
  findByKeywork(keyword) {
    const url = `/balo-detail/search?keyword=${keyword}`;
    return axiosClient.get(url, { keyword });
  },
};

export default baloDetailsAPI;
