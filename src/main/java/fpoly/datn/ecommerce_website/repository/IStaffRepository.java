package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Customers;
import fpoly.datn.ecommerce_website.entity.Staffs;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IStaffRepository extends JpaRepository<Staffs, String> {
    @Query(value = """
    SELECT * from staffs ;
""", nativeQuery = true)
    Page<Staffs> getAllPage(Pageable pageable);

    @Query(value = "SELECT c FROM Staffs c join Users i on c.users.userId = i.userId " +
            "join Roles r on i.roles.roleId = r.roleId " +
            "where i.account like %:keyword% " +
            "or i.address like %:keyword% " +
            " or i.fullName like %:keyword% " +
            "or i.phoneNumber like %:keyword%"
    )
    Page<Staffs> findallSearch(@Param("keyword") String keyword, Pageable pageable);
}
