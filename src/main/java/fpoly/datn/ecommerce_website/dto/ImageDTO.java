package fpoly.datn.ecommerce_website.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageDTO {

    private String id;

    @NotBlank(message = "Không để trống code")
    private String code;

    @NotBlank(message = "Không để trống name")
    private String name;

    @NotBlank(message = "Không để trống Hình ảnh")
    private String urlImage;
}
