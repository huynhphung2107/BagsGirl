package fpoly.datn.ecommerce_website.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "user_info")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class UserInfo {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "account")
    private String account;

    @Column(name = "password")
    private String password;
    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "userinfo_status")
<<<<<<< HEAD
    private Integer status;
=======
    private Integer userInfoStatus;
>>>>>>> ce12232d69a288cc59dbc839c50ca08237272fed

    @Column(name = "gender")
    private Boolean gender;

<<<<<<< HEAD
=======
    @Column(name = "address")
    private String address;

    @Column(name = "phone_number")
    private String phoneNumber;
    @Column(name = "note")
    private String note;

>>>>>>> ce12232d69a288cc59dbc839c50ca08237272fed
    @ManyToOne
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    private UserRole userRole;

    @Column(name = "note")
    private String note;
}
