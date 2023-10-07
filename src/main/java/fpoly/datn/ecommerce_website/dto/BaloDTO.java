package fpoly.datn.ecommerce_website.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class BaloDTO {

    private String id;
    @NotBlank
    private String baloCode;
    @NotBlank
    private String baloName;
    @NotBlank
    private String baloStatus;
    @NotBlank
    private String brandName;
    @NotBlank
    private String baloStatusString;
}
