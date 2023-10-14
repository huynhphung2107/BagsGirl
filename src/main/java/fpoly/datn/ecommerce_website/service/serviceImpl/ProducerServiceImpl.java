package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.BuckleType;
import fpoly.datn.ecommerce_website.entity.Producer;
import fpoly.datn.ecommerce_website.repository.IProducerRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import fpoly.datn.ecommerce_website.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProducerServiceImpl implements TypeService<Producer> {

    @Autowired
    private IProducerRepository producerRepository;

    @Override
    public List<Producer> findAll() {
        return producerRepository.findAll();
    }
    public Page<Producer> findAllPhanTrang(Integer page, Integer size){
        Pageable pageable = PageRequest.of(page,size);
        return this.producerRepository.findAll(pageable);
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
    public Producer update(String id, Producer entity) {
        Producer x = producerRepository.findById(id).get();
        x.setProducerCode(entity.getProducerCode());
        x.setProducerName(entity.getProducerName());
        x.setProducerStatus(entity.getProducerStatus());
        producerRepository.save(entity);
        return entity;
    }
    public Producer updateStatus(String id, int status) {
        Producer x = producerRepository.findById(id).get();
        x.setProducerStatus(status);
        return producerRepository.save(x);
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
