package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.repository.IBaloRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BaloServiceImpl implements ServiceGenarel<Balo> {

    @Autowired
    private IBaloRepository iBaloRepository;


    @Override
    public List<Balo> findAll() {
        return iBaloRepository.findAll();
    }

    @Override
    public Balo findById(String id) {
        return null;
    }

    @Override
    public Balo save(Balo entity) {
return entity;
    }

    @Override
    public Balo update(Balo entity) {
return entity;
    }

    @Override
    public void delete(String id) {

    }

    @Override
    public List<Balo> searchByName(String name) {
        return null;
    }
}