package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Brands;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBrandRepository extends JpaRepository<Brands, String> {
}
