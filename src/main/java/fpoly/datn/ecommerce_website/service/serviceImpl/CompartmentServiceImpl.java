package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Compartment;
import fpoly.datn.ecommerce_website.repository.ICompartmentRepository;
import fpoly.datn.ecommerce_website.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompartmentServiceImpl implements TypeService<Compartment> {

    @Autowired
    private ICompartmentRepository iCompartmentRepository;

    @Override
    public List<Compartment> findAll() {
        return iCompartmentRepository.findAll();
    }
    public Page<Compartment> findAllPhanTrang(Integer page, Integer size){
        Pageable pageable = PageRequest.of(page,size);
        return this.iCompartmentRepository.findAll(pageable);
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
    public Compartment update(String id, Compartment entity) {
        Compartment x = iCompartmentRepository.findById(id).get();
        x.setCompartmentCode(entity.getCompartmentCode());
        x.setCompartmentName(entity.getCompartmentName());
        x.setCompartmentStatus(entity.getCompartmentStatus());
        return iCompartmentRepository.save(entity);
    }
    public Compartment updateStatus(String id, int status) {
        Compartment x = iCompartmentRepository.findById(id).get();
        x.setCompartmentStatus(status);
        return iCompartmentRepository.save(x);
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
