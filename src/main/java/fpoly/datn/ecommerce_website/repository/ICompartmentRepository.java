package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Compartments;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICompartmentRepository extends JpaRepository<Compartments, String> {
    @Query("Select p from Compartments p where p.compartmentStatus <> -1")
    Page<Compartments> getAllPhanTrang(Pageable pageable);
}
