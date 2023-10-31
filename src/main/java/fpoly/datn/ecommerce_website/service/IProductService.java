package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.ProductDTO;
import fpoly.datn.ecommerce_website.entity.Products;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IProductService {

    String GetproductStatusString(int productStatus);

    Page<ProductDTO> findAllPagination(int pageNum, int PageSize);

    List<ProductDTO> findAll();

    Products findById(String id);

    Products save(Products entity);

    Products update(Products entity);

    Products updateProductStatus(String productID, int status);

    String delete(String id);

    List<Products> searchByName(String name);
}
