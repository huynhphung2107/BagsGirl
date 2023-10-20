import axiosClient from './axiosClient';

const userInfoAPI = {
  getAll(pageNum, pageSize) {
    const url = '/userInfo/';
    return axiosClient.get(url, {
      params: {
        page: pageNum - 1,
        size: pageSize,
      },
    });
  },
  findByKeywork(keyword) {
    const url = `/userinfo/search?keyword=${keyword}`;
    return axiosClient.get(url, { keyword });
  },
  get(id) {
    const url = `/userInfo?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/userInfo`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/userInfo?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(userInfoID, status) {
    const url = `/userInfo/update-status?userInfoID=${userInfoID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/userInfo?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default userInfoAPI;
