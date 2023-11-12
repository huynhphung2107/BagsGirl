import axiosClient from '../axiosClient';

const fullProductAPI = {
  getAll() {
    const url = '/all-products/';
    return axiosClient.get(url, {});
  },
  get(id) {
    const url = `/getOne/${id}`;
    return axiosClient.get(url);
  },
//   add(data) {
//     const url = `/brand`;
//     return axiosClient.post(url, data, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   },
//   update(id, data) {
//     const url = `/brand?id=${id}`;
//     return axiosClient.put(url, data, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   },
//   updateStatus(id, status) {
//     const url = `/brand/update-status?id=${id}&status=${status}`;
//     return axiosClient.put(url, null, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   },
//   delete(id) {
//     const url = `/brand?id=${id}`;
//     return axiosClient.delete(url);
//   },
};

export default fullProductAPI;
