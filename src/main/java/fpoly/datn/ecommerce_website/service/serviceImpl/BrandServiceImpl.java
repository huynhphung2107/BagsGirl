package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Brand;
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
    public List<Brand> findAll() {
        return iBrandRepository.findAll();
    }

    public Page<Brand> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return this.iBrandRepository.findAll(pageable);
    }

    @Override
    public Brand findById(String id) {
        return iBrandRepository.findById(id).get();
    }

    @Override
    public Brand save(Brand entity) {
        iBrandRepository.save(entity);
        return entity;
    }

    @Override
    public Brand update(Brand entity) {
        Brand brand = iBrandRepository.findById(entity.getId()).get();
        brand.setBrandName(entity.getBrandName());
        brand.setBrandStatus(entity.getBrandStatus());
        return iBrandRepository.save(brand);

    }

    public Brand updateStatus(String id, int status) {
        Brand brand = iBrandRepository.findById(id).get();
        brand.setBrandStatus(status);
        return iBrandRepository.save(brand);

    }

    @Override
    public String delete(String id) {
        iBrandRepository.deleteById(id);

        return "Delete successfully";
    }

    @Override
    public List<Brand> searchByName(String name) {
        return null;
    }


}
