package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Compartment;
import fpoly.datn.ecommerce_website.entity.Producer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICompartmentRepository extends JpaRepository<Compartment, String> {
    @Query("Select p from Compartment p where p.compartmentStatus <> -1")
    Page<Compartment> getAllPhanTrang(Pageable pageable);
}
