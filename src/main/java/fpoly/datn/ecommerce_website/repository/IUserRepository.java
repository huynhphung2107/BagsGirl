package fpoly.datn.ecommerce_website.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import fpoly.datn.ecommerce_website.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserRepository extends JpaRepository<Users, String> {
    @Query("SELECT u FROM Users u join Customers c on c.users.userId = u.userId " +
            "WHERE u.roles.roleCode = 'customer'" +
            "AND (u.fullName LIKE %:keyword%" +
            "OR u.phoneNumber LIKE %:keyword% " +
            "OR u.email LIKE %:keyword% )")
    List<Users> findCustomerByKeyword(@Param("keyword") String keyword);
    
    @Query ("SELECT i FROM Users i join Roles r on i.roles.roleId = r.roleId ")
    Page<Users> findAllAccountPhanTrang(Pageable pageable);

}
