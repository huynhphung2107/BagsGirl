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
public class CustomerDTO {

    private String id;
    private Integer customerStatus;
    private Integer customerPoint;
    private String fullName;
    private String account;
    private String password;
    private String email;
    private Integer userInfoStatus;
    private Boolean gender;
    private String phoneNumber;
    private String address;
    private String note;
    private String userInfoUserRoleId;

}
