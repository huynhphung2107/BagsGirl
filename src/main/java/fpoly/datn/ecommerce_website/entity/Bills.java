package fpoly.datn.ecommerce_website.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.Date;


@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
@Table(name = "bills", schema = "dbo", catalog = "FashionBagsEcommerceDB")
public class Bills {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "bill_id")
    private String billId;
    @ManyToOne
    @JoinColumn(name = "staff_id", referencedColumnName = "staff_id")
    private Staffs staff;
    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
    private Customers customer;
    @ManyToOne
    @JoinColumn(name = "voucher_id", referencedColumnName = "voucher_id")
    private Vouchers voucher;

    @Column(name = "bill_code")
    private String billCode;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "bill_create_date")
//    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date billCreateDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "bill_date_payment")
//    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date billDatePayment;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "bill_ship_date")
//    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date billShipDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "bill_receiver_date")
//        @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date billReceiverDate;

    @Column(name = "bill_total_price")
    private BigDecimal billTotalPrice;

    @Column(name = "product_amount")
    private Integer productAmount;

    @Column(name = "bill_price_after_voucher")
    private Double billPriceAfterVoucher;

    @Column(name = "shipping_address")
    private String shippingAddress;

    @Column(name = "billing_adress")
    private String billingAddress;

    @Column(name = "receiver_name")
    private String receiverName;

    @Column(name = "ship_price")
    private BigDecimal shipPrice;

    @Column(name = "order_email")
    private String orderEmail;

    @Column(name = "order_phone")
    private String orderPhone;

    @Column(name = "payment_method")
    private Integer paymentMethod;

    @Column(name = "bill_note")
    private String billNote;

    @Column(name = "bill_status")
    private Integer billStatus;
}
