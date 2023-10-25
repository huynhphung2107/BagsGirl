package fpoly.datn.ecommerce_website.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Setter
@Getter
@ToString
public class Product_ProductDetails {


    private String productID;
    private String colorsID;
    private String typesID;
    private String materialsID;
    private String sizesID;
    private String brandsID;
    private String compartmentsID;
    private String buckleTypesID;
    private String producersID;
    @NotNull
    private Float importPrice;
    @NotNull
    private Float retailPrice;
    @NotNull
    private Integer productsDetailAmount;
    @NotBlank
    private String productDetailDescribe;
    private Integer productDetailStatus;
    

}
