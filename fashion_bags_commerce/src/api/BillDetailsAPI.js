import axiosClient from './axiosClient';

const billDetailsAPI = {
  getAll(pageNum, pageSize) {
    const url = '/bill-details';
    return axiosClient.get(url, {
      params: {
        page: pageNum - 1,
        size: pageSize,
      },
    });
  },
  getAllPaginationStatus(search, status, pageNum, pageSize) {
    const url = '/bill-details/pagination';
    return axiosClient.get(url, {
      params: {
        search: search,
        status: status,
        page: pageNum - 1,
        size: pageSize,
      },
    });
  },
  get(id) {
    const url = `/billDetails?id=${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/bill-details`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  update(data) {
    const url = `/billDetails?id=${data.id}`;
    return axiosClient.put(url, data);
  },
  updateStatus(billDetailsID, status) {
    const url = `/billDetails/update-status?billDetailsID=${billDetailsID}&status=${status}`;
    return axiosClient.put(url, null, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
  delete(id) {
    const url = `/billDetails?id=${id}`;
    return axiosClient.delete(url);
  },
};

export default billDetailsAPI;
