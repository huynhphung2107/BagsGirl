package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Balo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBaloRepository extends JpaRepository<Balo, String> {
}
