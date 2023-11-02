package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.Users;
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
public class CustomerDTO1 {

    private String customerId;

    private Integer customerStatus;

    private Integer customerPoint;
    @NotBlank
    private String usersFullName;
    @NotBlank
    private String usersAccount;
    @NotBlank
    private String usersPassword;
    @NotBlank
    private String usersPhoneNumber;
    @NotBlank
    private String usersEmail;
    @NotBlank
    private String usersAddress;
    @NotBlank
    private Integer userStatus;
    @NotBlank
    private Boolean usersGender;

    private String usersUserNote;
    @NotBlank
    private String usersRolesRoleId;

}
