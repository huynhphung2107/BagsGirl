package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Producer;
import fpoly.datn.ecommerce_website.repository.IProducerRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProducerServiceImpl implements ServiceGenarel<Producer> {

    @Autowired
    private IProducerRepository producerRepository;

    @Override
    public List<Producer> findAll() {
        return producerRepository.findAll();
    }

    @Override
    public Producer findById(String id) {
        return producerRepository.findById(id).get();
    }

    @Override
    public Producer save(Producer entity) {
        producerRepository.save(entity);
        return entity;
    }

    @Override
    public Producer update(Producer entity) {
        producerRepository.save(entity);
        return entity;
    }

    @Override
    public String delete(String id) {
        producerRepository.deleteById(id);
        return "Delete successfully";

    }

    @Override
    public List<Producer> searchByName(String name) {
        return null;
    }


}
