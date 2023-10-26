package fpoly.datn.ecommerce_website.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "vouchers")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Builder
public class Vouchers {

    @Id
    @Column(name = "voucher_id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String voucherId;

    @Column(name = "voucher_code")
    private String voucherCode;

    @Column(name = "voucher_name")
    private String voucherName;

    @Column(name = "discount_price")
    private Integer discountPrice;

    @Column(name = "voucher_create_date")
    private LocalDateTime voucherCreateDate;

    @Column(name = "voucher_type")
    private String voucherType;

    @Column(name = "points_to_receive")
    private Integer pointsToReceive;

    @Column(name = "payment_type")
    private String paymentType;

    @Column(name = "voucher_amount")
    private Integer voucherAmount;

    @Column(name = "voucher_start_time")
    private LocalDateTime voucherStartTime;

    @Column(name = "voucher_end_time")
    private LocalDateTime voucherEndTime;

    @Column(name = "voucher_note")
    private String voucherNote;

    @Column(name = "voucher_status")
    private Integer voucherStatus;

}
