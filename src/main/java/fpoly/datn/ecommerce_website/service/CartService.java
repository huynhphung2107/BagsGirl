package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.CartDTO;
import fpoly.datn.ecommerce_website.entity.Carts;
import org.springframework.data.domain.Page;

import java.util.List;

public interface CartService {
    List<Carts> findAll();

    Page<Carts> findAllPhanTrang(Integer page);

    Carts findById(String id);

    Carts save(CartDTO cartDTO);

    Carts update(CartDTO cartDTO, String id);

    Boolean delete(String id);

    List<Carts> searchByName(String name);
}
