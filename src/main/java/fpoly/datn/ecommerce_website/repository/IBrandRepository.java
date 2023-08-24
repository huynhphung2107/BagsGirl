package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBrandRepository extends JpaRepository<Brand, String> {
}
