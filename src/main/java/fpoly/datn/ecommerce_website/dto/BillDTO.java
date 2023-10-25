package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.Customer;
import fpoly.datn.ecommerce_website.entity.Staff;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;
import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class BillDTO {
    @NotBlank
    private String id;
    @NotBlank
    private String billCode;
    @NotBlank
    private Date billCreateDate;
    @NotBlank
    private Date billDatePayment;

    private Date billShipDate;
    @NotBlank
    private Date billReceiverDate;
    @NotBlank
    private Double billTotalPrice;
    @NotBlank
    private Integer baloAmount;
    @NotBlank
    private Double billPriceAfterVoucher;

    private String shippingAddress;
    @NotBlank
    private String billingAddress;

    private String receiverName;

    private Double shippingPrice;

    private String orderEmail;
    private Double orderPhone;
    @NotBlank
    private Integer paymentMethod;
    private String note;
    @NotBlank
    private Integer billStatus;
    @NotBlank
    private CustomerDTO customer;
    @NotBlank
    private StaffDTO staff;
}
