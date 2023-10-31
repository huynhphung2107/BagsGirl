package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.Users;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class CustomerDTO {

    private String customerId;

    private Integer customerStatus;

    private Integer customerPoint;

    private Users users;

}
