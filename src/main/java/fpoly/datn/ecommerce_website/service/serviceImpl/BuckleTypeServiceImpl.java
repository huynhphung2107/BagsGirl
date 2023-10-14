package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.BuckleType;
import fpoly.datn.ecommerce_website.repository.IBuckleTypeRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import fpoly.datn.ecommerce_website.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuckleTypeServiceImpl implements TypeService<BuckleType> {

    @Autowired
    private IBuckleTypeRepository iBuckleTypeRepository;

    @Override
    public List<BuckleType> findAll() {
        return iBuckleTypeRepository.findAll();
    }
    public Page<BuckleType> findAllPhanTrang(Integer page, Integer size){
        Pageable pageable = PageRequest.of(page,size);
        return this.iBuckleTypeRepository.getAllPhanTrang(pageable);
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
    public BuckleType update(String id, BuckleType entity) {
//        return iBuckleTypeRepository.save(entity);
        BuckleType x = iBuckleTypeRepository.findById(id).get();
        x.setBuckleTypeCode(entity.getBuckleTypeCode());
        x.setBuckleTypeName(entity.getBuckleTypeName());
        x.setBuckleTypeStatus(entity.getBuckleTypeStatus());
        return iBuckleTypeRepository.save(x);
    }
    public BuckleType updateStatus(String id, int status){
        BuckleType x = iBuckleTypeRepository.findById(id).get();
        x.setBuckleTypeStatus(status);
        return iBuckleTypeRepository.save(x);
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
