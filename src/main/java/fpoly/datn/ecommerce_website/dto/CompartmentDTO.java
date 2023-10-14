package fpoly.datn.ecommerce_website.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Setter
@Getter
public class CompartmentDTO {

    private UUID id;

    @NotBlank(message = "Không để trống code")
    private String code;

    @NotBlank(message = "Không để trống name")
    private String compartmentName;

    private Integer compartmentStatus;
}
