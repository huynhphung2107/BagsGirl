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
    private String id;

    @Column(name = "code")
    private String sizeCode;

    @Column(name = "name")
    private String sizeName;

    @Column(name = "length_size")
    private String lengthSize;

    @Column(name = "wide_size")
    private String wideSize;

    @Column(name = "height_size")
    private String heightSize;

    @Column(name = "size-status")
    private Integer sizeStatus;

}
