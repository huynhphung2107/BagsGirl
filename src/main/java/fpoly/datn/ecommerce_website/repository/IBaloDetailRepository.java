package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.dto.BaloDetailDTO;
import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.entity.BaloDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBaloDetailRepository extends JpaRepository<BaloDetail, String> {
      List<BaloDetail> findAllByBalo_BaloCode(String baloID);

    @Query("SELECT bd FROM Balo b JOIN BaloDetail bd ON b.id = bd.balo.id  " +
            "WHERE b.baloCode LIKE %:keyword% " +
            "OR b.baloName LIKE %:keyword% " +
            "OR bd.color.colorName LIKE %:keyword%" +
            "OR bd.type.typeName LIKE %:keyword%" +
            "OR bd.material.materialName LIKE %:keyword%" +
            "OR bd.size.sizeName LIKE %:keyword%" +
            "OR b.brand.brandName LIKE %:keyword%" +
            "OR bd.compartment.compartmentName LIKE %:keyword%" +
            "OR bd.buckleType.buckleTypeName LIKE %:keyword%" +
            "OR bd.producer.producerName LIKE %:keyword%" +
            "OR CAST(bd.importPrice as string) LIKE %:keyword%" +
            "OR CAST(bd.retailPrice as string) LIKE %:keyword%"

    )
      List<BaloDetail> findByKeyword(@Param("keyword") String keyword);
}
