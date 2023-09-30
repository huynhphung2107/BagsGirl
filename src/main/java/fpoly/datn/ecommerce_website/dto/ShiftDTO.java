package fpoly.datn.ecommerce_website.dto;

import fpoly.datn.ecommerce_website.entity.Shift;
import fpoly.datn.ecommerce_website.entity.Staff;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class ShiftDTO {
    private String id;

    @NotBlank( message = "Không được để trống code")
    private String code;

    private LocalDateTime startTime;

    private LocalDateTime    endTime;

    @NotBlank( message = "Không được để trống createBy")
    private String createBy;

    @NotBlank( message = "Không được để trống note")
    private String note;

    @NotNull( message = "Không được để trống status")
    private Integer status;

    @NotBlank( message = "Không được để trống staff")
    private String staffUserInfoFullname;
}
