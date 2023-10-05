import axiosClient from '../axiosClient';

const producerAPI = {
  getAll() {
    const url = '/producer/';
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/producer?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/producer`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/producer?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(producerID, status) {
    const url = `/producer/update-status?producerID=${producerID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/producer?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default producerAPI;
