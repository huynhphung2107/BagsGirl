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
    private UUID baloId;
    private UUID colorId;
    private UUID typeId;
    private UUID materialId;
    private UUID sizeId;
    private UUID brandId;
    private UUID compartmentId;
    private UUID buckleTypeId;
    private UUID imageId;
    private UUID producerId;

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
