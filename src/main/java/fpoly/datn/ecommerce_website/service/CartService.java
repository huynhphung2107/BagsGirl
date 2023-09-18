package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.CartDTO;
import fpoly.datn.ecommerce_website.entity.Cart;
import org.springframework.data.domain.Page;

import java.util.List;

//update so với bản ServiceGenarelTwo phần findAllPhanTrang
public interface CartService {
    List<Cart> findAll();

    Page<Cart> findAllPhanTrang(Integer page);

    Cart findById(String id);

    Cart save(CartDTO cartDTO);

    Cart update(CartDTO cartDTO, String id);

    Boolean delete(String id);

    List<Cart> searchByName(String name);
}
