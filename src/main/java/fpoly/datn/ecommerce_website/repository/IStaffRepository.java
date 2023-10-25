package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Staffs;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IStaffRepository extends JpaRepository<Staffs, String> {

//    @Query("SELECT c FROM Staffs c WHERE c.users.roles.roleCode = 'nv' OR c.users.roles.roleCode = 'admin'")



    @Query(value= """
          SELECT * from staffs;
""",nativeQuery = true)
    Page<Staffs> getAll(Pageable pageable);

}
