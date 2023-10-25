package fpoly.datn.ecommerce_website.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "buckle_types")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BuckleTypes {

    @Id
    @Column(name = "buckle_type_id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String buckleTypeId;

    @Column(name = "buckle_type_code")
    private String buckleTypeCode;

    @Column(name = "buckle_type_name")
    private String buckleTypeName;

    @Column(name = "buckle_type_status")
    private Integer buckleTypeStatus;
}
