import axiosClient from '../axiosClient';


const typeAPI = {
  getAll(params) {
    const url = '/type/';
    return axiosClient.get(url, { params });
  },
  getAllPhanTrang(pageNum, pageSize) {
    const url = `/type/phanTrang?id=${pageNum}`;
    return axiosClient.get(url,
      {
        params: {
          page: pageNum - 1,
          size: pageSize,
        },
      });
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
  updateStatus(id, status) {
    const url = `/type/update-status?id=${id}&status=${status}`;
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
