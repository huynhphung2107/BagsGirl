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
    private String userInfoId;
    @NotBlank
    private String fullName;
    @NotBlank
    private String account;
    @NotBlank
    private String password;
    @NotBlank
    private String phoneNumber;
    @NotBlank
    private String email;
    @NotBlank
    private String address;
    @NotBlank
    private Integer userInfoStatus;
    private String birthday;
    @NotBlank
    private Boolean gender;
    private String note;
    @NotBlank
    private String userRoleId;
    private String userRoleName;
}
