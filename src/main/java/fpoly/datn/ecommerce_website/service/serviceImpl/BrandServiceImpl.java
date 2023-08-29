package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Brand;
import fpoly.datn.ecommerce_website.repository.IBrandRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandServiceImpl implements ServiceGenarel<Brand> {

    @Autowired
    private IBrandRepository iBrandRepository;

    @Override
    public List<Brand> findAll() {
        return iBrandRepository.findAll();
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
        iBrandRepository.save(entity);
        return entity;
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
