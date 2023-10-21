package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.BillDTO;

import java.util.List;

public interface IBillService {
    List<BillDTO> findAllBill();
}
