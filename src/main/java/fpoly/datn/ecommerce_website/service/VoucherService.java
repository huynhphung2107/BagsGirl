package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.entity.Vouchers;
import org.springframework.data.domain.Page;

import java.util.List;

public interface VoucherService {

    Page<Vouchers> findAllPage(Integer page, Integer size);

    List<Vouchers> fillAll();

    Vouchers getOne(String id);

    Vouchers add(Vouchers voucher);

    Vouchers update(Vouchers voucher);


    Vouchers updateStatus(String id, int status);

    void delete(String id);
}
