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
public class ProductDTO {

    private String productId;
    @NotBlank
    private String productCode;
    @NotBlank
    private String productName;
    @NotBlank
    private Integer productStatus;
    @NotBlank
    private String brandName;
}
