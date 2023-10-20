package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.entity.Voucher;
import org.springframework.data.domain.Page;

import java.util.List;

public interface VoucherService {

    Page<Voucher> findAllPage(Integer page, Integer size);

    List<Voucher> fillAll();

    Voucher getOne(String id);

    Voucher add(Voucher voucher);

    Voucher update(Voucher voucher);


    Voucher updateStatus(String id, int status);

    void delete(String id);
}
