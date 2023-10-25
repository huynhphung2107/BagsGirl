package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Types;
import fpoly.datn.ecommerce_website.repository.ITypeRepository;
import fpoly.datn.ecommerce_website.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeServiceImpl implements TypeService<Types> {

    @Autowired
    private ITypeRepository typeRepository;

    @Override
    public List<Types> findAll() {
        return typeRepository.findAll();
    }

    public Page<Types> findAllPhanTrang(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return this.typeRepository.getAllphanTrang(pageable);
    }

    @Override
    public Types findById(String id) {
        return typeRepository.findById(id).get();
    }

    @Override
    public Types save(Types entity) {
        typeRepository.save(entity);
        return entity;
    }

    @Override
    public Types update(String id, Types entity) {
        Types type = typeRepository.findById(id).get();
        type.setTypeCode(entity.getTypeCode());
        type.setTypeName(entity.getTypeName());
        type.setTypeStatus(entity.getTypeStatus());
        return typeRepository.save(type);
    }
    public Types updateStatus(String id, int status) {
        Types type = typeRepository.findById(id).get();
        type.setTypeStatus(status);
        return typeRepository.save(type);

    }

    @Override
    public String delete(String id) {
        typeRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<Types> searchByName(String name) {
        return null;
    }
}
