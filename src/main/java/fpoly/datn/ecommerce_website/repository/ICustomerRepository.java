package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, String> {

    @Query("SELECT c FROM Customer c WHERE c.userInfo.userRole.roleCode = 'user'")
    Page<Customer> findAllCustomersWithUserInfoUserRole(Pageable pageable);
}
