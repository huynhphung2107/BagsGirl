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
@Table(name = "compartments")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Compartments {

    @Id
    @Column(name = "compartment_id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String compartmentId;

    @Column(name = "compartment_code")
    private String compartmentCode;

    @Column(name = "compartment_name")
    private String compartmentName;

    @Column(name = "compartment_status")
    private Integer compartmentStatus;
}
