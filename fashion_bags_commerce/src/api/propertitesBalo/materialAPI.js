import axiosClient from '../axiosClient';

const materialAPI = {
  getAll() {
    const url = '/material/';
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/material?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/material`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/material?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(materialID, status) {
    const url = `/material/update-status?materialID=${materialID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/material?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default materialAPI;
