package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Color;
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
public class ColorServiceImpl implements ServiceGenarel<Color> {

    @Autowired
    private IColorReponsitory iColorReponsitory;

    @Override
    public List<Color> findAll() {
        return this.iColorReponsitory.findAll();
    }


    public Page<Color> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page,size);
        return this.iColorReponsitory.findAll(pageable);
    }

    @Override
    public Color findById(String id) {
        return this.iColorReponsitory.findById(UUID.fromString(id)).get();
    }

    @Override
    public Color save(Color entity) {
        return this.iColorReponsitory.save(entity);
    }

    @Override
    public Color update(Color entity) {
        return this.iColorReponsitory.save(entity);
    }

    @Override
    public String delete(String id) {
        iColorReponsitory.deleteById(UUID.fromString(id));
        return "Delete successfully";
    }

    @Override
    public List<Color> searchByName(String name) {
        return null;
    }
}



