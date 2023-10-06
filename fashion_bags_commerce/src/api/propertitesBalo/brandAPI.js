import axiosClient from '../axiosClient';

const brandAPI = {
  getAll(pageNum,pageSize) {
    const url = '/brand/';
    return axiosClient.get(url, {
      params: {
        page: pageNum -1,
        size: pageSize,
      },
    });
  },
  get(id) {
    const url = `/brand?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/brand`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/brand?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(id, status) {
    const url = `/brand/update-status?id=${id}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/brand?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default brandAPI;