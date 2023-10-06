import axiosClient from './axiosClient';

const baloAPI = {
  getAll(pageNum, pageSize) {
    const url = '/balo/';
    return axiosClient.get(url, {
      params: {
        page: pageNum - 1,
        size: pageSize,
      },
    });
  },
  get(id) {
    const url = `/balo?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/balo`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/balo?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(baloID, status) {
    const url = `/balo/update-status?baloID=${baloID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/balo?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default baloAPI;
