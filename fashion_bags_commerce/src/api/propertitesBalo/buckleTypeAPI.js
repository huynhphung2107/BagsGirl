import axiosClient from '../axiosClient';

const buckleTypeAPI = {
  getAll() {
    const url = '/buckletype/';
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/buckletype?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/buckletype`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/buckletype?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(buckletypeID, status) {
    const url = `/buckletype/update-status?buckletypeID=${buckletypeID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/buckletype?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default buckleTypeAPI;
