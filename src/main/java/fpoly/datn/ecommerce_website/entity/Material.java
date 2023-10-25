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
import lombok.ToString;

@Entity
@Table(name = "material")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class Material {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "material_code")
    private String materialCode;

    @Column(name = "material_name")
    private String materialName;

    @Column(name = "material_status")
    private Integer materialStatus;

}
