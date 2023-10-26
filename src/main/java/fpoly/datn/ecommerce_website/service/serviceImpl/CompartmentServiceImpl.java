package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Compartments;
import fpoly.datn.ecommerce_website.repository.ICompartmentRepository;
import fpoly.datn.ecommerce_website.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompartmentServiceImpl implements TypeService<Compartments> {

    @Autowired
    private ICompartmentRepository iCompartmentRepository;

    @Override
    public List<Compartments> findAll() {
        return iCompartmentRepository.findAll();
    }

    public Page<Compartments> findAllPhanTrang(Integer page, Integer size){
        Pageable pageable = PageRequest.of(page,size);
        return this.iCompartmentRepository.getAllPhanTrang(pageable);
    }

    @Override
    public Compartments findById(String id) {
        return iCompartmentRepository.findById(id).get();
    }

    @Override
    public Compartments save(Compartments entity) {
        return iCompartmentRepository.save(entity);
    }

    @Override
    public Compartments update(String id, Compartments entity) {
        Compartments x = iCompartmentRepository.findById(id).get();
        x.setCompartmentCode(entity.getCompartmentCode());
        x.setCompartmentName(entity.getCompartmentName());
        x.setCompartmentStatus(entity.getCompartmentStatus());
        return iCompartmentRepository.save(entity);
    }
    public Compartments updateStatus(String id, int status) {
        Compartments x = iCompartmentRepository.findById(id).get();
        x.setCompartmentStatus(status);
        return iCompartmentRepository.save(x);
    }

    @Override
    public String delete(String id) {
        iCompartmentRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<Compartments> searchByName(String name) {
        return null;
    }
}
