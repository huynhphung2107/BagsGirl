package fpoly.datn.ecommerce_website.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
public class BaloDetailDTO {

    private UUID id;
    private String baloCode;
    private String baloName;
    private String colorName;
    private String typeName;
    private String materialName;
    private String sizeName;
    private String brandName;
    private String compartmentName;
    private String buckleTypeName;
    private String imgUrl;
    private String producerName;

    @NotNull
    private Float importPrice;

    @NotNull
    private Float retailPrice;

    @NotNull
    private Integer amount;

    @NotBlank
    private String describe;

    private Integer status;
    

}
