package fpoly.datn.ecommerce_website.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
public class CompartmentDTO {

    private UUID compartmentId;

    @NotBlank(message = "Không để trống code")
    private String compartmentCode;

    @NotBlank(message = "Không để trống name")
    private String compartmentName;

    private Integer compartmentStatus;
}
