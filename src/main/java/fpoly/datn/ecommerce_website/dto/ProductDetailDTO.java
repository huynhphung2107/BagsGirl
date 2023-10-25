package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.Images;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Setter
@Getter
@ToString
public class ProductDetailDTO {

    private UUID id;
    private String productsCode;
    private String productsName;
    private String colorsName;
    private String typesName;
    private String materialsName;
    private String sizesName;
    private String brandsName;
    private String compartmentsName;
    private String buckleTypesName;
    private String producersName;
    @NotNull
    private Float importPrice;
    @NotNull
    private Float retailPrice;
    @NotNull
    private Integer productDetailsAmount;
    @NotBlank
    private String productDetailsDescribe;
    private Integer productDetailsStatus;
    

}
