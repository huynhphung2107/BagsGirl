import axiosClient from './axiosClient';

const typeAPI = {
  getAll(params) {
    const url = '/type/';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/type?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/type`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/type?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  delete(id) {
    const url = `/type?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default typeAPI;
