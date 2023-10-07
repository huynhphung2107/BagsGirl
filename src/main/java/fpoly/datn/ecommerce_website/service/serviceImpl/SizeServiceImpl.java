package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Size;
import fpoly.datn.ecommerce_website.repository.ISizeReponsitory;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SizeServiceImpl implements ServiceGenarel<Size> {

    @Autowired
    private ISizeReponsitory iSizeReponsitory;


    @Override
    public List<Size> findAll() {
        return this.iSizeReponsitory.findAll();
    }

    public Page<Size> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return this.iSizeReponsitory.findAll(pageable);
    }

    @Override
    public Size findById(String id) {
        return this.iSizeReponsitory.findById(id).get();
    }

    @Override
    public Size save(Size size) {
        return iSizeReponsitory.save(size);
    }

    @Override
    public Size update(Size size) {
        return iSizeReponsitory.save(size);
    }


    public Size updateStatus(String id, int status) {
        Size size = iSizeReponsitory.findById(id).get();
        size.setSizeStatus(status);
        return iSizeReponsitory.save(size);

    }
    
    @Override
    public List<Size> searchByName(String name) {
        return null;
    }

    @Override
    public String delete(String id) {
        this.iSizeReponsitory.deleteById(id);
        return "Delete successfully";
    }
}
