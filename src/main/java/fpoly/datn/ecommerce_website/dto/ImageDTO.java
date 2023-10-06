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
<<<<<<< HEAD
    private String imgUrl;
=======
    private String anh2;
>>>>>>> c14e930910e9b8259b08407ca837f3300d229b66
}
