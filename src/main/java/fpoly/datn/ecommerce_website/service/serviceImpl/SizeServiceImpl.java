package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.SizeDTO;
import fpoly.datn.ecommerce_website.entity.Size;
import fpoly.datn.ecommerce_website.entity.Type;
import fpoly.datn.ecommerce_website.repository.ISizeReponsitory;
import fpoly.datn.ecommerce_website.service.ISizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class SizeServiceImpl implements ISizeService {

    @Autowired
    private ISizeReponsitory iSizeReponsitory;


    @Override
    public List<Size> findAll() {
        return this.iSizeReponsitory.findAll();
    }

    @Override
    public Size findById(UUID id) {
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

    @Override
    public void delete(UUID id) {

        this.iSizeReponsitory.deleteById(id);
    }
}
