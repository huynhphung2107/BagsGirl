package fpoly.datn.ecommerce_website.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "staffs")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class Staffs {

    @Id
    @Column(name = "staff_id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String staffId;

    @Column(name = "staff_status")
    private Integer staffStatus;

    @OneToOne()
    @JsonManagedReference
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private Users users;


}
