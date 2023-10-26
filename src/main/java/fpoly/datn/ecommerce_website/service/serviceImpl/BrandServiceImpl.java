package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Brands;
import fpoly.datn.ecommerce_website.repository.IBrandRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandServiceImpl implements ServiceGenarel<Brands> {

    @Autowired
    private IBrandRepository iBrandRepository;

    @Override
    public List<Brands> findAll() {
        return iBrandRepository.findAll();
    }

    public Page<Brands> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return this.iBrandRepository.findAll(pageable);
    }

    @Override
    public Brands findById(String id) {
        return iBrandRepository.findById(id).get();
    }

    @Override
    public Brands save(Brands entity) {
        iBrandRepository.save(entity);
        return entity;
    }

    @Override
    public Brands update(Brands entity) {
        Brands brand = iBrandRepository.findById(entity.getBrandId()).get();
        brand.setBrandName(entity.getBrandName());
        brand.setBrandStatus(entity.getBrandStatus());
        return iBrandRepository.save(brand);

    }

    public Brands updateStatus(String id, int status) {
        Brands brand = iBrandRepository.findById(id).get();
        brand.setBrandStatus(status);
        return iBrandRepository.save(brand);

    }

    @Override
    public String delete(String id) {
        iBrandRepository.deleteById(id);

        return "Delete successfully";
    }

    @Override
    public List<Brands> searchByName(String name) {
        return null;
    }


}
