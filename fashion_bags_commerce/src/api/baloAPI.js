import axiosClient from './axiosClient';

const baloAPI = {
  getAll(params) {
    const url = '/balo/';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/balo?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/balo`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/balo?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  delete(id) {
    const url = `/balo?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default baloAPI;
