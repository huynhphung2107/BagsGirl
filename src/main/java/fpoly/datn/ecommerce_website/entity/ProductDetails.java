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

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "product_details")
public class ProductDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private String productDetailsID;
    @Column(name = "import_price")
    private Float importPrice;
    @Column(name = "retail_price")
    private Float retailPrice;
    @Column(name = "amount")
    private Integer productDetailsAmount;
    @Column(name = "describe")
    private String productDetailsDescribe;
    @Column(name = "product_detail_status")
    private Integer productDetailsStatus;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Products products;
    @ManyToOne
    @JoinColumn(name = "color_id")
    private Colors colors;
    @ManyToOne
    @JoinColumn(name = "type_id")
    private Types types;
    @ManyToOne
    @JoinColumn(name = "material_id")
    private Materials materials;
    @ManyToOne
    @JoinColumn(name = "size_id")
    private Sizes sizes;
    @ManyToOne
    @JoinColumn(name = "compartment_id")
    private Compartments compartments;
    @ManyToOne
    @JoinColumn(name = "buckle_type_id")
    private BuckleTypes buckleTypes;
    @ManyToOne
    @JoinColumn(name = "producer_id")
    private Producers producers;
}
