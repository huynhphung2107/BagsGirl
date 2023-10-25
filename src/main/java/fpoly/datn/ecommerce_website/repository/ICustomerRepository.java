package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Customers;
import fpoly.datn.ecommerce_website.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICustomerRepository extends JpaRepository<Customers, String> {
    @Query("SELECT u FROM Users u join Customers c on c.userInfo.userId = u.userId " +
            "WHERE u.userRole.roleCode = 'customer'" +
            "AND (u.fullName LIKE %:keyword%" +
            "OR u.phoneNumber LIKE %:keyword% " +
            "OR u.email LIKE %:keyword% )")
    List<Users> findCustomerByKeyword(@Param("keyword") String keyword);
}
