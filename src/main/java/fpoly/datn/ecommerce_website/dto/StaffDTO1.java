package fpoly.datn.ecommerce_website.dto;

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
public class StaffDTO1 {

    private String staffId;
    @NotNull
    private Integer staffStatus;
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
    @NotNull
    private Integer userStatus;
    @NotBlank
    private Boolean usersGender;
    @NotBlank
    private String usersUserNote;
    @NotBlank
    private String usersRolesRoleId;

    private String usersRolesRoleName;

}
