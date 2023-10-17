package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Producer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IProducerRepository extends JpaRepository<Producer, String> {
    @Query("Select p from Producer p where p.producerStatus <> -1")
    Page<Producer> getAllPhanTrang(Pageable pageable);
}
