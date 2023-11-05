package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.Brands;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class Product_BrandDTO {

    private String productId;

    private String productCode;

    private String productName;

    private String productStatus;

    private Brands brand;
}
