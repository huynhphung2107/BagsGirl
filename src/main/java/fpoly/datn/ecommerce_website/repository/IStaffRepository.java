package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Staff;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IStaffRepository extends JpaRepository<Staff, String> {

    @Query("SELECT c FROM Staff c WHERE c.userInfo.userRole.roleCode = 'nv' OR c.userInfo.userRole.roleCode = 'admin'")
    Page<Staff> findAllStaffsWithUserInfoUserRole(Pageable pageable);
}
