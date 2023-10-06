import axiosClient from './axiosClient';

const shiftApi = {
  getAll(params) {
    const url = '/shift/';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/shift?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/shift`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/sfhit?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  delete(id) {
    const url = `/sfhit?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default shiftApi;
