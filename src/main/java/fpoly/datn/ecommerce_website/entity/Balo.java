package fpoly.datn.ecommerce_website.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
<<<<<<< HEAD
import jakarta.persistence.OneToOne;
=======
>>>>>>> ce12232d69a288cc59dbc839c50ca08237272fed
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
@Entity
@Table(name = "balo")
public class Balo {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "balo_code")
    private String baloCode;

    @Column(name = "balo_name")
    private String baloName;

    @Column(name = "status")
    private int baloStatus;
<<<<<<< HEAD
    @ManyToOne()
    @JoinColumn(name = "brand_id", referencedColumnName = "id")
    private Brand brand;
=======

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;


>>>>>>> ce12232d69a288cc59dbc839c50ca08237272fed
}
