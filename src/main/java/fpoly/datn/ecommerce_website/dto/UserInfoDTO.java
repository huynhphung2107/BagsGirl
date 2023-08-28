package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.UserRole;
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
public class UserInfoDTO {

    private String id;
    @NotBlank
    private String fullName;
    @NotBlank
    private String account;
    @NotBlank
    private String password;
    @NotBlank
    private String email;
    @NotBlank
    private Integer status;
    @NotBlank
    private Boolean gender;
    @NotBlank
    private UserRole userRole;

}
