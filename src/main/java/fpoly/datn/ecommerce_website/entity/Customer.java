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
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
@Table(name = "customer")
public class Customer {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "address")
    private String address;

    @Column(name = "point")
    private Integer point;

    @Column(name = "note")
    private String note;

//    @Pattern(regexp = "0[0-9\\s.-]{9,9}", message = "Không quá 10 số và bắt đầu bằng 0")
    @Column(name = "phone_number")
    private String sdt;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserInfo userInfo;

}
