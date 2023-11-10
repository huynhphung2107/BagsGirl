package fpoly.datn.ecommerce_website.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class FullProductDTO {

    private String productId;
    private String productCode;
    private String productName;
    private String brandName;
    private String imagesImgUrl;
    private String imagesImgCode;
    private ProductDetailDTO productDetail;
}
