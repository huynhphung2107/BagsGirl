package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.ShiftDTO;
import fpoly.datn.ecommerce_website.entity.Shift;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ShiftService {

    List<Shift> findAll();

    Page<Shift> findAllPhanTrang(Integer page);

    Shift findById(String id);

    Shift save(ShiftDTO shiftDTO);

    Shift update(ShiftDTO shiftDTO, String id);

    Boolean delete(String id);

    List<Shift> searchByName(String name);
}
