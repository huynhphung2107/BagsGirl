package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Compartment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICompartmentRepository extends JpaRepository<Compartment,String> {
}
