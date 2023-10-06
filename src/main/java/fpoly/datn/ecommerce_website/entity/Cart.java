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
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;

@Entity
@Table(name = "cart")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class Cart {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "cart_code")
    private String cartCode;

    @Column(name = "cart_create_time")
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date cartCreatTime;

    @Column(name = "cart_payment_time")
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date cartPaymentTime;

    @Column(name = "note")
    private String cartNote;

    @Column(name = "status")
    private Integer cartStatus;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

}
