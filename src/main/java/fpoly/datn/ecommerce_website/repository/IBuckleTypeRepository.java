package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.BuckleTypes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IBuckleTypeRepository extends JpaRepository<BuckleTypes, String> {
    @Query("select b from BuckleTypes b where b.buckleTypeStatus <> -1 ")
    Page<BuckleTypes>findAllPagination(Pageable pageable);
    
}
