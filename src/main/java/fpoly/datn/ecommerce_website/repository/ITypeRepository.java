package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Type;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ITypeRepository extends JpaRepository<Type, String> {
    @Query( "select T from  Type T where T.typeStatus <> -1 ")
    Page<Type> getAllphanTrang(Pageable pageable);
}
