package fpoly.datn.ecommerce_website.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
@Entity
@Table(name = "products")
public class Products {

    @Id
    @Column(name = "product_id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String productId;
    @Column(name = "product_code")
    private String productCode;
    @Column(name = "product_name")
    private String productName;
    @Column(name = "product_status")
    private int productStatus;
    @ManyToOne
    @JoinColumn(name = "brand_id", referencedColumnName = "brand_id")
    private Brands brands;

}
