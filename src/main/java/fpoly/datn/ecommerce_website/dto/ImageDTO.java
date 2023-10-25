package fpoly.datn.ecommerce_website.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageDTO {

    private String imageId;

    @NotBlank(message = "Không để trống code")
    private String imageCode;

    @NotBlank(message = "Không để trống name")
    private String imageName;

    @NotBlank(message = "Không để trống Hình ảnh")
    private String imageUrl;

}
