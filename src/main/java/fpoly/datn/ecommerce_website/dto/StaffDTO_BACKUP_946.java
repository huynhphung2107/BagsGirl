package fpoly.datn.ecommerce_website.dto;

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

    private String staffId;

    private Integer staffStatus;
<<<<<<< HEAD
    private String fullName;
    private String account;
    private String password;
    private String email;
    private Integer usersStatus;
    private Boolean gender;
    private String phoneNumber;
    private String address;
    private String userNote;
=======
    @NotBlank
    private String usersFullName;
    @NotBlank
    private String usersAccount;
    @NotBlank
    private String usersPassword;
    @NotBlank
    private String usersEmail;
    @NotNull
    private Integer usersStatus;

    private Boolean usersGender;

    private String usersPhoneNumber;

    private String usersAddress;

    private String usersUserNote;

>>>>>>> 8304dd596670531bbd45d3921f30f6033836adcf
    private String usersRolesRoleId;

}
