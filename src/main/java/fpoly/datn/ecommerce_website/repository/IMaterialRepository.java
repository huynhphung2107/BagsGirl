package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Materials;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMaterialRepository extends JpaRepository<Materials, String> {
}
