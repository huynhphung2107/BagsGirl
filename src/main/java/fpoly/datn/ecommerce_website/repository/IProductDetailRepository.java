package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.ProductDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductDetailRepository extends JpaRepository<ProductDetails, String> {
    @Query("SELECT pd FROM  ProductDetails pd " +
            "join Products p on p.productId = pd.product.productId " +
            "where pd.product.productCode = :productCode")
    List<ProductDetails> findAllByProductId(@Param("productCode") String productCode);

    @Query("SELECT bd FROM Products b JOIN ProductDetails bd ON b.productId = bd.product.productId  " +
            "WHERE b.productCode LIKE %:keyword% " +
            "OR b.productId LIKE %:keyword% " +
            "OR b.productName LIKE %:keyword% " +
            "OR bd.color.colorName LIKE %:keyword%" +
            "OR bd.type.typeName LIKE %:keyword%" +
            "OR bd.material.materialName LIKE %:keyword%" +
            "OR bd.size.sizeName LIKE %:keyword%" +
            "OR b.brand.brandName LIKE %:keyword%" +
            "OR bd.compartment.compartmentName LIKE %:keyword%" +
            "OR bd.buckleType.buckleTypeName LIKE %:keyword%" +
            "OR bd.producer.producerName LIKE %:keyword%"+
            "OR CAST(bd.retailPrice as string) LIKE %:keyword%"
    )
    List<ProductDetails> findByKeyword(@Param("keyword") String keyword);

}
