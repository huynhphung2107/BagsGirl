package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.dto.CartDTO;
import fpoly.datn.ecommerce_website.entity.Carts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICartRepository extends JpaRepository<Carts, String> {
//    @Query(value = "select * from cart a join customer b on a.customer_id=b.id", nativeQuery = true)
//    List<CartDTO> getAllCart() ;
}
