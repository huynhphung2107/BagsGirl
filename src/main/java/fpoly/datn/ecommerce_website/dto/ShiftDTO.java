package fpoly.datn.ecommerce_website.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class ShiftDTO {
    private String shiftId;

    @NotBlank( message = "Không được để trống code")
    private String shiftCode;

    private LocalDateTime shiftStartTime;

    private LocalDateTime shiftEndTime;

    @NotBlank( message = "Không được để trống createBy")
    private String createBy;

    @NotBlank( message = "Không được để trống note")
    private String shiftNote;

    @NotNull( message = "Không được để trống status")
    private Integer shiftStatus;

    @NotBlank( message = "Không được để trống staff")
    private String staffUsersFullname;
}
