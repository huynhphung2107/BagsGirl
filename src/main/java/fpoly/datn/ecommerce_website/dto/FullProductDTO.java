package fpoly.datn.ecommerce_website.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class FullProductDTO {
//    private String imgUrl;
//    private String productName;
//    private String productBrandBrandName;
//    private String colorName;
//    private String typeName;
//    private String materialName;
//    private String sizeName;
//    private String producerName;
//    private String compartmentName;
//    private BigDecimal importPrice;
//    private BigDecimal retailPrice;
//    private Integer productDetailAmount;
//    private String productDetailDescribe;
//    private Integer productDetailStatus;


private String imgCode;
    private String imgName;
    private String imgUrl;
    private String productDetailId;
    private BigDecimal importPrice;
    private BigDecimal retailPrice;
    private Integer productDetailAmount;
    private String productDetailDescribe;
    private Integer productDetailStatus;
}
