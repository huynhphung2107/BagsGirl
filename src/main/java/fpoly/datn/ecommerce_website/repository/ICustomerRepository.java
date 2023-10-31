package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Customers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICustomerRepository extends JpaRepository<Customers, String> {

    @Query(value = """
            select * from customers;
            """,nativeQuery = true)
    Page<Customers> findAllCustomersWithUsersRoles(Pageable pageable);

    @Query("SELECT c FROM Customers c join Users u on c.users.userId = u.userId " +
            "where c.customerId LIKE %:keyword%" +
            "or  u.userId LIKE %:keyword%" +
            "or u.fullName LIKE %:keyword%" +
            "or u.account LIKE %:keyword%" +
            "or u.email LIKE %:keyword%" +
            "or u.phoneNumber LIKE %:keyword%")
    List<Customers> findByKeyword(String keyword);
}
