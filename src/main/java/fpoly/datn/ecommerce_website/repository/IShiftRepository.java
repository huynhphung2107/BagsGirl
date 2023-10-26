package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Shifts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IShiftRepository extends JpaRepository<Shifts,String > {
}
