package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.BrandDTO;
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
public class BrandServiceImpl{

    @Autowired
    private IBrandRepository iBrandRepository;


    public List<Brands> findAll() {
        return iBrandRepository.findAll();
    }

    public Page<Brands> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return this.iBrandRepository.findAll(pageable);
    }


    public Brands findById(String id) {
        return iBrandRepository.findById(id).get();
    }


    public Brands save(Brands entity) {
        iBrandRepository.save(entity);
        return entity;
    }


    public Brands update(String id,Brands entity) {
        Brands brand = iBrandRepository.findById(id).get();
        brand.setBrandCode(entity.getBrandCode());
        brand.setBrandName(entity.getBrandName());
        brand.setBrandStatus(entity.getBrandStatus());
        return iBrandRepository.save(brand);

    }

    public Brands updateStatus(String id, int status) {
        Brands brand = iBrandRepository.findById(id).get();
        brand.setBrandStatus(status);
        return iBrandRepository.save(brand);

    }

   
    public String delete(String id) {
        iBrandRepository.deleteById(id);

        return "Delete successfully";
    }

    public List<Brands> searchByName(String name) {
        return null;
    }


}
