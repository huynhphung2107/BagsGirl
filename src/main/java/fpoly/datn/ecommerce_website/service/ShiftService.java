package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.ShiftDTO;
import fpoly.datn.ecommerce_website.entity.Shifts;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ShiftService {

    List<Shifts> findAll();

    Page<Shifts> findAllPhanTrang(Integer page);

    Shifts findById(String id);

    Shifts save(ShiftDTO shiftDTO);

    Shifts update(ShiftDTO shiftDTO, String id);

    Boolean delete(String id);

    List<Shifts> searchByName(String name);
}
