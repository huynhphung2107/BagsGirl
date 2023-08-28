package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Compartment;
import fpoly.datn.ecommerce_website.repository.ICompartmentRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompartmentServiceImpl implements ServiceGenarel<Compartment> {

    @Autowired
    private ICompartmentRepository iCompartmentRepository;

    @Override
    public List<Compartment> findAll() {
        return iCompartmentRepository.findAll();
    }

    @Override
    public Compartment findById(String id) {
        return iCompartmentRepository.findById(id).get();
    }

    @Override
    public Compartment save(Compartment entity) {
        return iCompartmentRepository.save(entity);
    }

    @Override
    public Compartment update(Compartment entity) {
        return iCompartmentRepository.save(entity);
    }

    @Override
    public String delete(String id) {
        iCompartmentRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<Compartment> searchByName(String name) {
        return null;
    }
}
