import axiosClient from './axiosClient';

const userInfoAPI = {
  getAll(pageNum, pageSize) {
    const url = '/user/';
    return axiosClient.get(url, {
      params: {
        page: pageNum - 1,
        size: pageSize,
      },
    });
  },
  findByKeywork(keyword) {
    const url = `/customer/search?keyword=${keyword}`;
    return axiosClient.get(url, { keyword });
  },
  get(id) {
    const url = `/user?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/user`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/user?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(userInfoID, status) {
    const url = `/user/update-status?userInfoID=${userInfoID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/user?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default userInfoAPI;
