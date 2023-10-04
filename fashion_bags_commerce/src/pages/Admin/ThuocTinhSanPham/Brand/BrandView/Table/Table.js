import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import brandAPI from './brandAPI';

const TableContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    current: 1, // Initial page number
    pageSize: 10, // Number of items per page
    total: 0, // Total number of items (to be updated after data fetch)
  });

  useEffect(() => {
    // Fetch brand data using the brandAPI.getAll function
    brandAPI
      .getAll(pagination.current, pagination.pageSize)
      .then((result) => {
        const { data: brandData, totalItems } = result.data;
        setData(brandData);
        setPagination((prevPagination) => ({
          ...prevPagination,
          total: totalItems,
        }));
      })
      .catch(() => {
        // Handle error
      })
      .finally(() => {
        setLoading(false); // Update loading state once data is fetched
      });
  }, [pagination.current, pagination.pageSize]); // Update data when page or page size changes

  // Define your table columns
  const columns = [
    // ... Your column definitions ...
  ];

  // Handle page change
  const handlePageChange = (newPage, newPageSize) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      current: newPage,
      pageSize: newPageSize,
    }));
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={pagination}
      onChange={handlePageChange} // Handle page changes
      loading={loading}
    />
  );
};

export default TableContent;