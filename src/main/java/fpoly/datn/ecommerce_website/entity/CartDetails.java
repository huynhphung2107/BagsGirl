package fpoly.datn.ecommerce_website.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "cart_details")
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CartDetails {

    @Id
    @ManyToOne
    @JoinColumn(name = "cart_id", referencedColumnName = "cart_id")
    private Carts cart;

    @Id
    @ManyToOne
    @JoinColumn(name = "product_detail_id", referencedColumnName = "product_detail_id")
    private ProductDetails productDetail;

    @Column(name = "amount")
    private Integer amount;

    @Column(name = "price")
    private Float price;

    @Column(name = "price_after_discount")
    private Float priceAfterDiscount;



}
