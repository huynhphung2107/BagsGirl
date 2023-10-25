package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.BaloDTO;
import fpoly.datn.ecommerce_website.entity.Products;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IBaloService {

    Page<BaloDTO> findAll(int pageNum, int PageSize);

    Products findById(String id);

    Products save(Products entity);

    Products update(Products entity);

    Products updateBaloStatus(String baloID, int status);

    String delete(String id);

    List<Products> searchByName(String name);
}
