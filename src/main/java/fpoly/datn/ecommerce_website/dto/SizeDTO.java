package fpoly.datn.ecommerce_website.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString

public class SizeDTO {
    private UUID sizeId;
    private String sizeCode;
    private String sizeName;
    private String sizeLength;
    private String sizeWidth;
    private String sizeHeight;
    private Integer sizeStatus;

}
