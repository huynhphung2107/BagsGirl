package fpoly.datn.ecommerce_website.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class BillAddDTO {

    private String id;

    private String billCode;

    private Timestamp billCreateDate;

    private Timestamp billDatePayment;

    private Timestamp billShipDate;

    private Timestamp billReceiverDate;

    private Double billTotalPrice;

    private Integer baloAmount;

    private Double billPriceAfterVoucher;

    private String shippingAddress;

    private String billingAddress;

    private String receiverName;

    private Double shippingPrice;

    private String orderEmail;
    private Double orderPhone;

    private Integer paymentMethod;
    private String note;

    private Integer billStatus;

    private String customerID;

    private String staffID;
}
