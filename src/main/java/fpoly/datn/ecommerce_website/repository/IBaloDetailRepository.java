package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.dto.BaloDetailDTO;
import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.entity.BaloDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBaloDetailRepository extends JpaRepository<BaloDetail, String> {


    public  List<BaloDetail> findAllByBalo_BaloCode(String baloID);


}
