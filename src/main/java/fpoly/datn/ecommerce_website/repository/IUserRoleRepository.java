package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserRoleRepository extends JpaRepository<UserRole, String> {
}
