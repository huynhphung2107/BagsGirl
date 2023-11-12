package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.BuckleTypes;
import fpoly.datn.ecommerce_website.entity.Colors;
import fpoly.datn.ecommerce_website.entity.Compartments;
import fpoly.datn.ecommerce_website.entity.Materials;
import fpoly.datn.ecommerce_website.entity.Producers;
import fpoly.datn.ecommerce_website.entity.Products;
import fpoly.datn.ecommerce_website.entity.Sizes;
import fpoly.datn.ecommerce_website.entity.Types;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;

@Setter
@Getter
@ToString
public class ProductDetailDTO {
//    private String productDetailId;
//    private BigDecimal importPrice;
//    private BigDecimal retailPrice;
//    private Integer productDetailAmount;
//    private String productDetailDescribe;
//    private Integer productDetailStatus;
//    private Products product;
//    private Colors color;
//    private Types type;
//    private Materials material;
//    private Sizes size;
//    private Compartments compartment;
//    private BuckleTypes buckleType;
//    private Producers producer;

    private String productDetailId;
    private BigDecimal importPrice;
    private BigDecimal retailPrice;
    private Integer productDetailAmount;
    private String productDetailDescribe;
    private Integer productDetailStatus;

}
