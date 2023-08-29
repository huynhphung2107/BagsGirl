package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.BuckleType;
import fpoly.datn.ecommerce_website.repository.IBuckleTypeRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuckleTypeServiceImpl implements ServiceGenarel<BuckleType> {

    @Autowired
    private IBuckleTypeRepository iBuckleTypeRepository;

    @Override
    public List<BuckleType> findAll() {
        return iBuckleTypeRepository.findAll();
    }

    @Override
    public BuckleType findById(String id) {
        return iBuckleTypeRepository.findById(id).get();
    }

    @Override
    public BuckleType save(BuckleType entity) {
        return iBuckleTypeRepository.save(entity);
    }

    @Override
    public BuckleType update(BuckleType entity) {
        return iBuckleTypeRepository.save(entity);

    }

    @Override
    public String delete(String id) {
        iBuckleTypeRepository.deleteById(id);
        return "Delete successfully";

    }

    @Override
    public List<BuckleType> searchByName(String name) {
        return null;
    }
}
