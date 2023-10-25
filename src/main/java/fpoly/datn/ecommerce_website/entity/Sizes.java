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
@Table(name = "sizes")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder

public class Sizes {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "size_id")
    private String sizeId;

    @Column(name = "size_code")
    private String sizeCode;

    @Column(name = "size_name")
    private String sizeName;

    @Column(name = "size_length")
    private String sizeLength;

    @Column(name = "size_wide")
    private String sizeWidth;

    @Column(name = "size_height")
    private String sizeHeight;

    @Column(name = "size_status")
    private Integer sizeStatus;

}
