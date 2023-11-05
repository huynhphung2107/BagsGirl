import axiosClient from './axiosClient';

const imageAPI = {
  getAll(pageNum, pageSize) {
    const url = '/image/pagination';
    return axiosClient.get(url, {
      params: {
        page: pageNum - 1,
        size: pageSize,
      },
    });
  },
  upload(data) {
    const url = `/image`;
    return axiosClient.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};

export default imageAPI;
