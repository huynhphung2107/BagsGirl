package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Voucher;
import fpoly.datn.ecommerce_website.repository.IVoucherRepository;
import fpoly.datn.ecommerce_website.service.VoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoucherServiceImpl implements VoucherService {

    @Autowired
    private IVoucherRepository iVoucherRepository;

    @Override
    public Page<Voucher> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return iVoucherRepository.findAll(pageable);
    }

    @Override
    public List<Voucher> fillAll() {
        return iVoucherRepository.findAll();
    }

    @Override
    public Voucher getOne(String id) {
        return iVoucherRepository.findById(id).get();
    }

    @Override
    public Voucher add(Voucher voucher) {
        return iVoucherRepository.save(voucher);
    }

    @Override
    public Voucher update(Voucher voucher) {
        return null;
    }

    @Override
    public Voucher updateStatus(String id, int status) {
        Voucher voucher = iVoucherRepository.findById(id).get();
        voucher.setVoucherStatus(status);
        return iVoucherRepository.save(voucher);
    }

    @Override
    public void delete(String id) {

    }
}
