package fpoly.datn.ecommerce_website.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;


@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Builder
public class VoucherDTO {

    private String id;
    private String voucherCode;
    private String voucherName;
    private Integer discountPrice;
    private LocalDateTime voucherCreateDate;
    private String voucherType;
    private Integer pointsToReceive;
    private String paymentType;
    private Integer voucherAmount;
    private LocalDateTime voucherStartTime;
    private LocalDateTime voucherEndTime;
    private String note;
    private Integer voucherStatus;

}
