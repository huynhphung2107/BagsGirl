import axiosClient from './axiosClient';

const userInfoAPI = {
  getAll() {
    const url = '/user-info/';
    return axiosClient.get(url);
  },
  getAllPhanTrang(pageNum, pageSize) {
    const url = `/user-info/phanTrang?id=${pageNum}`;
    return axiosClient.get(url, {
      params: {
        page: pageNum - 1,
        size: pageSize,
      },
    });
  },
  findByKeywork(keyword) {
    const url = `/user-info/search?keyword=${keyword}`;
    return axiosClient.get(url, { keyword });
  },
  get(id) {
    const url = `/user-info?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/user-info`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/user-info?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(userInfoId, status) {
    const url = `/user-info/update-status?userInfoId=${userInfoId}&userInfoStatus=${status}`;
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
