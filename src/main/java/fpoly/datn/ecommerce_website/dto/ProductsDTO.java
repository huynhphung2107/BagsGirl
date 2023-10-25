package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.Brands;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Setter
@Getter
@ToString
public class ProductsDTO {

    @GeneratedValue(strategy = GenerationType.UUID)
    private String productId;

    private String productCode;

    private String productName;

    private int productStatus;
    private Brands brands;
    

}
