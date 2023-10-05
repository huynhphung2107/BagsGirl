import axiosClient from '../axiosClient';

const colorAPI = {
  getAll() {
    const url = '/color/';
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/color?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/color`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/color?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(colorID, status) {
    const url = `/color/update-status?colorID=${colorID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/color?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default colorAPI;
