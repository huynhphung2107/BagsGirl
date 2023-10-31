import axiosClient from '../axiosClient';

const compartmentAPI = {
  getAll() {
    const url = '/compartment/';
    return axiosClient.get(url);
  },
  getAllPhanTrang(pageNum, pageSize) {
    const url = `/compartment/pagination?id=${pageNum}`;
    return axiosClient.get(url,
      {
        params: {
          page: pageNum - 1,
          size: pageSize,
        },
      });
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
  update(id, data) {
    const url = `/compartment?id=${id}`;
    return axiosClient.put(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  updateStatus(id, status) {
    const url = `/compartment/update-status?id=${id}&status=${status}`;
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
