package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Colors;
import fpoly.datn.ecommerce_website.repository.IColorReponsitory;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ColorServiceImpl implements ServiceGenarel<Colors> {

    @Autowired
    private IColorReponsitory iColorReponsitory;

    @Override
    public List<Colors> findAll() {
        return this.iColorReponsitory.findAll();
    }


    public Page<Colors> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page,size);
        return this.iColorReponsitory.findAll(pageable);
    }

    @Override
    public Colors findById(String id) {
        return this.iColorReponsitory.findById(UUID.fromString(id)).get();
    }

    @Override
    public Colors save(Colors entity) {
        return this.iColorReponsitory.save(entity);
    }

    @Override
    public Colors update(Colors entity) {
        return this.iColorReponsitory.save(entity);
    }

    public Colors updateStatus(String id, int status) {
        Colors color = iColorReponsitory.findById(UUID.fromString(id)).get();
        color.setColorStatus(status);
        return iColorReponsitory.save(color);

    }

    @Override
    public String delete(String id) {
        iColorReponsitory.deleteById(UUID.fromString(id));
        return "Delete successfully";
    }

    @Override
    public List<Colors> searchByName(String name) {
        return null;
    }
}



