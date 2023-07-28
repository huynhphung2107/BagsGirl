package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IStaffRepository extends JpaRepository<Staff, String> {
}
