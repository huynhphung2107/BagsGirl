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

import java.sql.Date;

@Entity
@Table(name = "bill")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class Bill {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column(name = "bill_code")
    private String billCode;
    @Column(name = "bill_create_date")
    private Date billCreateDate;
    @Column(name = "bill_date_payment")
    private Date billDatePayment;
    @Column(name = "bill_ship_date")
    private Date billShipDate;
    @Column(name = "bill_receiver_date")
    private Date billReceiverDate;
    @Column(name = "bill_total_price")
    private Double billTotalPrice;
    @Column(name = "balo_amount")
    private Integer baloAmount;
    @Column(name = "bill_price_after_voucher")
    private Double billPriceAfterVoucher;
    @Column(name = "shipping_address")
    private String shippingAddress;
    @Column(name = "billing_adress")
    private String billingAddress;
    @Column(name = "receiver_name")
    private String receiverName;
    @Column(name = "ship_price")
    private Double shippingPrice;
    @Column(name = "order_email")
    private String orderEmail;
    @Column(name = "order_phone")
    private Double orderPhone;
    @Column(name = "payment_method")
    private Integer paymentMethod;
    @Column(name = "note")
    private String note;
    @Column(name = "status")
    private Integer billStatus;
    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;
    @ManyToOne
    @JoinColumn(name = "staff_id", referencedColumnName = "staff_id")
    private Staffs staff;
}
