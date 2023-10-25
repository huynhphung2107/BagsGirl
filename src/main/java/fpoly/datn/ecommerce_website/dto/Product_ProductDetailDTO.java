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
public class Product_ProductDetailDTO {


    private String productId;
    private String colorId;
    private String typeId;
    private String materialId;
    private String sizeId;
    private String brandId;
    private String compartmentId;
    private String buckleTypeId;
    private String producerId;
    @NotNull
    private Float importPrice;
    @NotNull
    private Float retailPrice;
    @NotNull
    private Integer productDetailAmount;
    @NotBlank
    private String productDetailDescribe;

    private Integer productDetailStatus;
    

}
