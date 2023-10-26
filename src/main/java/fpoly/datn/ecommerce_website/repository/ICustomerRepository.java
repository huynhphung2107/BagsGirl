package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Customers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customers, String> {

    @Query("SELECT c FROM Customers c WHERE c.users.roles.roleCode = 'user'")
    Page<Customers> findAllCustomersWithUsersRoles(Pageable pageable);
}
