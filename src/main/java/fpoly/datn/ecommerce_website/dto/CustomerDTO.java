package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.UserInfo;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class CustomerDTO {
    @NotBlank
    private String id;
    @NotBlank
    private Integer status;
    @NotBlank
    private Integer point;
    @NotBlank
    private UserInfoDTO userInfo;
}
