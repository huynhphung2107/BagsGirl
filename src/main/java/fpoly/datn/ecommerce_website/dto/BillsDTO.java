package fpoly.datn.ecommerce_website.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import fpoly.datn.ecommerce_website.entity.Customers;
import fpoly.datn.ecommerce_website.entity.Staffs;
import fpoly.datn.ecommerce_website.entity.Vouchers;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class BillsDTO {

    private String billId;

    private Staffs staff;
    //
    private Customers customer;
    //
    private Vouchers voucher;

    private String billCode;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date billCreateDate;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date billDatePayment;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date billShipDate;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date billReceiverDate;

    private BigDecimal billTotalPrice;

    private Integer productAmount;

    private Double billPriceAfterVoucher;

    private String shippingAddress;

    private String billingAddress;

    private String receiverName;

    private BigDecimal shipPrice;

    private String orderEmail;

    private String orderPhone;

    private Integer paymentMethod;

    private String billNote;

    private Integer billStatus;
}
