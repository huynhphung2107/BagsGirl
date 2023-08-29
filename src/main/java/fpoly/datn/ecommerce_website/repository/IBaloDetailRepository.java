package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.dto.BaloDetailDTO;
import fpoly.datn.ecommerce_website.entity.BaloDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBaloDetailRepository extends JpaRepository<BaloDetail, String> {

    @Query(value = """
              SELECT *
            FROM balo_detail
            JOIN balo ON balo_detail.balo_id = balo.id
            JOIN color ON balo_detail.color_id = color.id
            JOIN type ON balo_detail.type_id = type.id
            JOIN material ON balo_detail.material_id = material.id
            JOIN size ON balo_detail.size_id = size.id
            JOIN brand ON balo_detail.brand_id = brand.id
            JOIN compartment ON balo_detail.compartment_id = compartment.id
            JOIN buckle_type ON balo_detail.buckle_type_id = buckle_type.id
            JOIN image ON balo_detail.image_id = image.id
            JOIN producer ON balo_detail.producer_id = producer.id;
            """, nativeQuery = true)
    List<BaloDetailDTO> getAll();

}
