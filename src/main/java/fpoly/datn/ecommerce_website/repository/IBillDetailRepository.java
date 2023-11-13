package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.BillDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IBillDetailRepository extends JpaRepository<BillDetails, String> {
    @Query(value = "select b from ProductDetails p join BillDetails b " +
            "on p.productDetailId = b.productDetails.productDetailId " +
            "join Bills c on b.bills.billId = c.billId where b.bills.billStatus LIKE %:status% " +
            "AND ( c.billCode like %:search%" +
            "or c.staff.users.fullName like %:search%" +
            "or c.customer.users.fullName like %:search%" +
            "or c.customer.users.phoneNumber like %:search%)")
    Page<BillDetails> findAllBillDetails(@Param("search") String search, @Param("status") String status, Pageable pageable);
}
