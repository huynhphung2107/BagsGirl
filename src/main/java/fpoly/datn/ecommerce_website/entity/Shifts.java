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
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "shifts")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Setter
@Getter
public class Shifts {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "shift_code")
    private String shiftCode;

    @Column(name = "shift_start_time")
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDateTime shiftStartTime;

    @Column(name = "shift_end_time")
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDateTime shiftEndTime;

    @Column(name = "create_by")
    private String shiftCreateBy;

    @Column(name = "note")
    private String shiftNote;

    @Column(name = "status")
    private Integer shiftStatus;

    @ManyToOne
    @JoinColumn(name = "staff_id")
    private Staff staff;

}
