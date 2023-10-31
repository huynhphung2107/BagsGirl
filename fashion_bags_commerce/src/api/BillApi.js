import axiosClient from './axiosClient';

const billsAPI = {
  getAll(pageNum, pageSize) {
    const url = '/bills/';
    return axiosClient.get(url, {
      params: {
        page: pageNum - 1,
        size: pageSize,
      },
    });
  },
  get(id) {
    const url = `/bills?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/bills`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/bills?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(billsID, status) {
    const url = `/bills/update-status?billsID=${billsID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/bills?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default billsAPI;
