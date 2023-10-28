package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Producers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IProducerRepository extends JpaRepository<Producers, String> {
    @Query("Select p from Producers p where p.producerStatus <> -1")
    Page<Producers> findAllPagination(Pageable pageable);
}
