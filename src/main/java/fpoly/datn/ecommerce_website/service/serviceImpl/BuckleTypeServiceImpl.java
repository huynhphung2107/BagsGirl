package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.BuckleTypes;
import fpoly.datn.ecommerce_website.repository.IBuckleTypeRepository;
import fpoly.datn.ecommerce_website.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuckleTypeServiceImpl implements TypeService<BuckleTypes> {

    @Autowired
    private IBuckleTypeRepository iBuckleTypeRepository;

    @Override
    public List<BuckleTypes> findAll() {
        return iBuckleTypeRepository.findAll();
    }
    public Page<BuckleTypes> findAllPhanTrang(Integer page, Integer size){
        Pageable pageable = PageRequest.of(page,size);
        return this.iBuckleTypeRepository.getAllPhanTrang(pageable);
    }

    @Override
    public BuckleTypes findById(String id) {
        return iBuckleTypeRepository.findById(id).get();
    }

    @Override
    public BuckleTypes save(BuckleTypes entity) {
        return iBuckleTypeRepository.save(entity);
    }

    @Override
    public BuckleTypes update(String id, BuckleTypes entity) {
//        return iBuckleTypeRepository.save(entity);
        BuckleTypes x = iBuckleTypeRepository.findById(id).get();
        x.setBuckleTypeCode(entity.getBuckleTypeCode());
        x.setBuckleTypeName(entity.getBuckleTypeName());
        x.setBuckleTypeStatus(entity.getBuckleTypeStatus());
        return iBuckleTypeRepository.save(x);
    }
    public BuckleTypes updateStatus(String id, int status){
        BuckleTypes x = iBuckleTypeRepository.findById(id).get();
        x.setBuckleTypeStatus(status);
        return iBuckleTypeRepository.save(x);
    }

    @Override
    public String delete(String id) {
        iBuckleTypeRepository.deleteById(id);
        return "Delete successfully";

    }

    @Override
    public List<BuckleTypes> searchByName(String name) {
        return null;
    }
}
