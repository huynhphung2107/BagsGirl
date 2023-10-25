package fpoly.datn.ecommerce_website.entity;

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
@Table(name = "customers")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class Customers {

    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String customerId;

    @Column(name = "customer_status")
    private Integer customerStatus;

    @Column(name = "customer_points")
    private Integer customerPoint;

    @OneToOne()
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private Users users;

}
