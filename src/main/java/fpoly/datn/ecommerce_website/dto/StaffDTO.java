package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.UserInfo;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
public class StaffDTO {

    private String id;

    @NotNull
    private Integer staffStatus;
    @NotBlank
    private String fullName;
    @NotBlank
    private String account;
    @NotBlank
    private String password;
    @NotBlank
    private String email;
    @NotNull
    private Integer userInfoStatus;
    private Boolean gender;
    private String phoneNumber;
    private String address;
    private String note;

    private String userInfoUserRoleId;

}
