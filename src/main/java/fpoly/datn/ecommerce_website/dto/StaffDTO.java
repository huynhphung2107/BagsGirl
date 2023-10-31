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
    private String fullName;
    private String account;
    private String password;
    private String email;
    private Integer usersStatus;
    private Boolean gender;
    private String phoneNumber;
    private String address;
    private String userNote;
    private String usersRolesRoleId;

}
