package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.dto.FullProductDTO;
import fpoly.datn.ecommerce_website.dto.ProductDTO;
import fpoly.datn.ecommerce_website.entity.Products;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Products, String> {

    @Query("SELECT b from Products b where b.productStatus <> -1")
    Page<Products> getAllWithoutDelete(Pageable pageable);

    @Query("SELECT i.imgUrl ,p.productId, p.productName, p.brand.brandName, pd.color.colorName, pd.size.sizeName, pd.compartment.compartmentName, pd.buckleType.buckleTypeName, pd.material.materialName " +
            "FROM Products p " +
            "JOIN Images i ON i.product = p " +
            "JOIN ProductDetails pd ON pd.product = p " +
            "WHERE p.productId = :productId")
    List<Object[]> getProductDetailsById(@Param("productId") String productId);
}
