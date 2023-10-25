package fpoly.datn.ecommerce_website.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
public class BuckleTypeDTO {

    private UUID buckleTypeId;

    @NotBlank(message = "Không để trống code")
    private String buckleTypeCode;

    @NotBlank(message = "Không để trống name")
    private String buckleTypeName;

    private Integer buckleTypeStatus;
}
