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
  upload(formData, productDetailId, imageCode) {
    const url = `/image/upload?id=${productDetailId}&imageCode=${imageCode}`;
    return axiosClient.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default imageAPI;
