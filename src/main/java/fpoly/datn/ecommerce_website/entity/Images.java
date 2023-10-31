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

@Entity
@Table(name = "images")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class Images {
    @Id
    @Column(name = "image_id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String imageId;

    @Column(name = "image_code")
    private String imgCode;

    @Column(name = "image_name")
    private String imgName;

    @Column(name = "image_url")
    private String imgUrl;

    @Column(name = "isPrimary")
    private Boolean isPrimary;

    @ManyToOne
    @JoinColumn(name = "product_detail_id")
    private ProductDetails productDetail;

}
