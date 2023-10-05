import axiosClient from '../axiosClient';

const typeAPI = {
  getAll() {
    const url = '/type/';
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/type?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/type`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/type?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(typeID, status) {
    const url = `/type/update-status?typeID=${typeID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/type?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default typeAPI;
