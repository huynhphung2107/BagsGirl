import axiosClient from './axiosClient';

const baloDetailsAPI = {
  getAll(params) {
    const url = '/baloDetais/';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/baloDetais?id=${id}`;
    return axiosClient.get(url);
  },
  getAllByBaloCode(baloCode) {
    const url = `balo/${baloCode}/balodetails`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/baloDetais`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/baloDetais?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  delete(id) {
    const url = `/baloDetais?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default baloDetailsAPI;
