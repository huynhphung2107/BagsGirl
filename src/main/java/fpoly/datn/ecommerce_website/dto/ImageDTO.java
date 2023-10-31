package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.ProductDetails;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageDTO {
    private String imageId;
    private String imgCode;
    private String imgName;
    private String imgUrl;
    private Boolean isPrimary;
    private ProductDetails productDetail;
}
