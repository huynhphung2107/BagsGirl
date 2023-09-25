package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.Cart;
import fpoly.datn.ecommerce_website.entity.Customer;
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

    private String id;

    @NotBlank( message = "Không được để trống code")
    private String code;

    private Date createTime;

    private Date paymentTime;

    @NotBlank( message = "Không được để trống note")
    private String note;

    @NotBlank( message = "Không được để trống status")
    private Integer status;

    @NotBlank( message = "Không được để trống customer")
    private String customer;

}
