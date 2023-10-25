package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Customer;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICustomerRepository extends JpaRepository<Customer, String> {
    @Query("SELECT u FROM UserInfo u join Customer c on c.userInfo.id = u.id " +
            "WHERE u.userRole.roleCode = 'customer'" +
            "AND (u.fullName LIKE %:keyword%" +
            "OR u.phoneNumber LIKE %:keyword% " +
            "OR u.email LIKE %:keyword% )")
    List<UserInfo> findCustomerByKeyword(@Param("keyword") String keyword);
}
