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
public class Balo_BaloDetailDTO {


    private String baloID;
    private String colorID;
    private String typeID;
    private String materialID;
    private String sizeID;
    private String brandID;
    private String compartmentID;
    private String buckleTypeID;
    private String producerID;
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
