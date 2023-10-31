package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.BillsDTO;
import org.springframework.data.domain.Page;

import java.util.List;


public interface IBillService {
    List<BillsDTO> getAll();

    Page<BillsDTO> getPagination(int pageNum, int pageSize);

    BillsDTO save(BillsDTO billsDTO);

    BillsDTO getOne(String id);

    BillsDTO update(BillsDTO billsDTO);

    Boolean delete(String id);
}
