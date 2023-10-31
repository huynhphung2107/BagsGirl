package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.BillDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBillDetailRepository extends JpaRepository<BillDetails, String> {
}
