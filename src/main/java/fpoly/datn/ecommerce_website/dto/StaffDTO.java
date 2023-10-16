package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.UserInfo;
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

    private UserInfo userInfo;


    @NotBlank
    private String fullName;
    @NotBlank
    private String account;
    @NotBlank
    private String password;
    @NotBlank
    private String email;
    @NotBlank
    private Integer userInfoStatus;
    @NotBlank
    private Boolean gender;


}
