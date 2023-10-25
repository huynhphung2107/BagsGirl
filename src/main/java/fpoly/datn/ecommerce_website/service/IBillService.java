package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.BillAddDTO;
import fpoly.datn.ecommerce_website.dto.BillDTO;
import fpoly.datn.ecommerce_website.entity.Bill;

import java.util.List;

public interface IBillService {
    List<BillDTO> findAllBill();

    BillAddDTO save (BillAddDTO billAddDTO);
}
