import axiosClient from '../axiosClient';

const compartmentAPI = {
  getAll() {
    const url = '/compartment/';
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/compartment?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/compartment`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/compartment?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(compartmentID, status) {
    const url = `/compartment/update-status?compartmentID=${compartmentID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/compartment?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default compartmentAPI;
