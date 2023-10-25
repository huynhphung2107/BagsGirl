package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.ProductDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBaloDetailRepository extends JpaRepository<ProductDetails, String> {
      List<ProductDetails> findAllByBalo_BaloCode(String baloID);

    @Query("SELECT bd FROM Products b JOIN ProductDetails bd ON b.productId = bd.products.productId  " +
            "WHERE b.productCode LIKE %:keyword% " +
            "OR b.productName LIKE %:keyword% " +
            "OR bd.colors.colorName LIKE %:keyword%" +
            "OR bd.types.typeName LIKE %:keyword%" +
            "OR bd.materials.materialName LIKE %:keyword%" +
            "OR bd.sizes.sizeName LIKE %:keyword%" +
            "OR b.brands.brandName LIKE %:keyword%" +
            "OR bd.compartments.compartmentName LIKE %:keyword%" +
            "OR bd.buckleTypes.buckleTypeName LIKE %:keyword%" +
            "OR bd.producers.producerName LIKE %:keyword%" +
            "OR CAST(bd.importPrice as string) LIKE %:keyword%" +
            "OR CAST(bd.retailPrice as string) LIKE %:keyword%"

    )
      List<ProductDetails> findByKeyword(@Param("keyword") String keyword);
}
