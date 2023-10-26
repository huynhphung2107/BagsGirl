import axiosClient from './axiosClient';

const staffAPI = {
  getAll(pageNum, pageSize) {
    const url = '/staff/pagination';
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
    const url = `/staff?id=${id}`;
    return axiosClient.get(url);
  },
  getOne(id) {
    const url = `/staff?id=${id}`;
    return axiosClient.get(url, { id });
  },
  add(data) {
    const url = `/staff`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/staff?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(id, status) {
    const url = `/staff/update-status?id=${id}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/staff?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default staffAPI;
