package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.BillAddDTO;
import fpoly.datn.ecommerce_website.dto.BillDTO;
import fpoly.datn.ecommerce_website.entity.Bills;

import java.util.List;

public interface IBillService {
    List<BillDTO> findAllBill();

    Bills save(BillAddDTO billAddDTO);
}
