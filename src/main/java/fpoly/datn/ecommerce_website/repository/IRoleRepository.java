package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRoleRepository extends JpaRepository<Roles, String> {
}
