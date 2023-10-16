package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Voucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IVoucherRepository extends JpaRepository<Voucher,String> {


}
