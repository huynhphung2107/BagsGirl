package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICustomerRepository extends JpaRepository<Customer, String> {
}
