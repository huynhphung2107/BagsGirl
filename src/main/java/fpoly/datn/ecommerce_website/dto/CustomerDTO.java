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
public class CustomerDTO {

    private String customerId;
    private Integer customerStatus;
    private Integer customerPoint;
    @NotNull
    private Integer staffStatus;
    @NotBlank
    private String fullName;
    @NotBlank
    private String account;
    @NotBlank
    private String usersPassword;
    @NotBlank
    private String usersEmail;
    @NotNull
    private Integer usersStatus;
    private Boolean usersGender;
    private String usersPhoneNumber;
    private String usersAddress;

    private String usersNote;

    private String usersRolesRoleId;

}
