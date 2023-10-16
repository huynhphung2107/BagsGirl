import axiosClient from '../axiosClient';

const producerAPI = {
  getAll() {
    const url = '/producer/';
    return axiosClient.get(url);
  },
  getAllPhanTrang(pageNum, pageSize) {
    const url = `/producer/phanTrang?id=${pageNum}`;
    return axiosClient.get(url,
      {
        params: {
          page: pageNum - 1,
          size: pageSize,
        },
      });
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
  updateStatus(id, status) {
    const url = `/producer/update-status?id=${id}&status=${status}`;
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
