package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.BillDetailsDTO;
import org.springframework.data.domain.Page;

import java.util.List;


public interface IBillDetailsService {
    List<BillDetailsDTO> getAll();

    Page<BillDetailsDTO> getPagination(int pageNum, int pageSize);

    BillDetailsDTO getOne(String id);

    BillDetailsDTO save(BillDetailsDTO billDetailsDTO);

    BillDetailsDTO update(BillDetailsDTO billDetailsDTO);

    Boolean delete(String id);
}
