import axiosClient from '../axiosClient';

const sizeAPI = {
  getAll() {
    const url = '/size/';
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/size?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/size`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/size?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(sizeID, status) {
    const url = `/size/update-status?sizeID=${sizeID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/size?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default sizeAPI;
