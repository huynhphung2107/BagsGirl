package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Material;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMaterialRepository extends JpaRepository<Material, String> {
}
