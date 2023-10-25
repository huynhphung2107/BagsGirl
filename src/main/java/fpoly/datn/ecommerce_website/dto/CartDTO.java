package fpoly.datn.ecommerce_website.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CartDTO {

    private String cartId;

    @NotBlank( message = "Không được để trống code")
    private String cartCode;

    private Date createTime;

    private Date paymentTime;

    @NotBlank( message = "Không được để trống note")
    private String cartNote;

    @NotBlank( message = "Không được để trống status")
    private Integer cartStatus;

    @NotBlank( message = "Không được để trống customer")
    private String customer;

}
