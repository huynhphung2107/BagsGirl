package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.Image;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Setter
@Getter
@ToString
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
<<<<<<< HEAD
    private String imgUrl;
=======
    private String imageUrl;
    private String producerCode;
>>>>>>> c14e930910e9b8259b08407ca837f3300d229b66
    private String producerName;

    @NotNull
    private Float importPrice;

    @NotNull
    private Float retailPrice;

    @NotNull
    private Integer baloDetailAmount;

    @NotBlank
    private String baloDetailDescribe;

    private Integer baloDetailStatus;
    

}
