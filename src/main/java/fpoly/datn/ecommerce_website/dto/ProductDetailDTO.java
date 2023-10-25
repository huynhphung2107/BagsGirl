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
public class ProductDetailDTO {

    private UUID productDetailId;
    private String productCode;
    private String productName;
    private String colorName;
    private String typeName;
    private String materialName;
    private String sizeName;
    private String productBrandName;
    private String compartmentName;
    private String buckleTypeName;
    private String producerName;
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
