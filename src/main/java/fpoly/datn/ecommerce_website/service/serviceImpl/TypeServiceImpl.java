package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Color;
import fpoly.datn.ecommerce_website.entity.Type;
import fpoly.datn.ecommerce_website.repository.ITypeRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TypeServiceImpl implements ServiceGenarel<Type> {

    @Autowired
    private ITypeRepository typeRepository;

    @Override
    public List<Type> findAll() {
        return typeRepository.findAll();
    }

    public Page<Type> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return this.typeRepository.findAll(pageable);
    }

    @Override
    public Type findById(String id) {
        return typeRepository.findById(id).get();
    }

    @Override
    public Type save(Type entity) {
        typeRepository.save(entity);
        return entity;
    }

    @Override
    public Type update(Type entity) {
        typeRepository.save(entity);
        return entity;
    }
    public Type updateStatus(String id, int status) {
        Type type = typeRepository.findById(id).get();
        type.setTypeStatus(status);
        return typeRepository.save(type);

    }

    @Override
    public String delete(String id) {
        typeRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<Type> searchByName(String name) {
        return null;
    }
}
