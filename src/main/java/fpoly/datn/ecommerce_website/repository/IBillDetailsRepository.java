package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Bill;
import fpoly.datn.ecommerce_website.entity.BillDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBillDetailsRepository extends JpaRepository<BillDetails, String> {

}
