package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Types;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ITypeRepository extends JpaRepository<Types, String> {
    @Query( "select T from  Types T where T.typeStatus <> -1 ")
    Page<Types> findAllPagination(Pageable pageable);
}
