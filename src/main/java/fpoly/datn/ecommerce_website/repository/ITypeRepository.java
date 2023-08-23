package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITypeRepository extends JpaRepository<Type, String> {

}
