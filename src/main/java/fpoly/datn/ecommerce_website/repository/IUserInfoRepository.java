package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.BaloDetail;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserInfoRepository extends JpaRepository<UserInfo, String> {
    @Query("SELECT u FROM UserInfo u join Customer c on c.userInfo.id = u.id " +
            "WHERE u.userRole.roleCode = 'customer'" +
            "AND (u.fullName LIKE %:keyword%" +
            "OR u.phoneNumber LIKE %:keyword% " +
            "OR u.email LIKE %:keyword% )")
    List<UserInfo> findCustomerByKeyword(@Param("keyword") String keyword);
    
    @Query ("SELECT i FROM UserInfo i join UserRole r on i.userRole.id = r.id ")
    Page<UserInfo> findAllAccountPhanTrang(Pageable pageable);
}
