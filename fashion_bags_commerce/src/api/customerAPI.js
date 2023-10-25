import axiosClient from './axiosClient';

const customerAPI = {
  getAll(pageNum, pageSize) {
    const url = '/customer/pagination';
    return axiosClient.get(url, {
      params: {
        page: pageNum - 1,
        size: pageSize,
      },
    });
  },

  getRoles(params) {
    const url = '/role';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/customer?id=${id}`;
    return axiosClient.get(url);
  },
  getOne(id) {
    const url = `/customer?id=${id}`;
    return axiosClient.get(url, { id });
  },
  add(data) {
    const url = `/customer`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/customer?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(id, status) {
    const url = `/customer/update-status?id=${id}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/customer?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default customerAPI;
