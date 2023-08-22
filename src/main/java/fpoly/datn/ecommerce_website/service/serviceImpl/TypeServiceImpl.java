package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Type;
import fpoly.datn.ecommerce_website.repository.ITypeRepository;
import fpoly.datn.ecommerce_website.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeServiceImpl implements ITypeService {
    @Autowired
    private ITypeRepository typeRepository;

    @Override
    public List<Type> findAll() {
        return this.typeRepository.findAll();
    }

    @Override
    public Type findByID(String id) {
        return this.typeRepository.findById(id).get();
    }

    @Override
    public Type save(Type type) {
        return this.typeRepository.save(type);
    }

    @Override
    public Type update(Type type) {
        return this.typeRepository.save(type);
    }

    @Override
    public void delete(String id) {
        this.typeRepository.deleteById(id);
    }
}
