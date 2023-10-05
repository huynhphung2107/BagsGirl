import axiosClient from '../axiosClient';

const brandAPI = {
  getAll() {
    const url = '/brand/';
    return axiosClient.get(url);
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
  updateStatus(brandID, status) {
    const url = `/brand/update-status?brandID=${brandID}&status=${status}`;
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
