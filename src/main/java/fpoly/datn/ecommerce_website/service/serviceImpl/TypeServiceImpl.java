package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Type;
import fpoly.datn.ecommerce_website.repository.ITypeRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeServiceImpl implements ServiceGenarel<Type> {

    @Autowired
    private ITypeRepository typeRepository;

    @Override
    public List<Type> findAll() {
        return typeRepository.findAll();
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
