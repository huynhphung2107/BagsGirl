package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Material;
import fpoly.datn.ecommerce_website.repository.IMaterialRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarelTwo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaterialServiceImpl implements ServiceGenarelTwo<Material> {
    @Autowired
    private IMaterialRepository repo;


    @Override
    public List<Material> findAll() {
        return repo.findAll();
    }


    @Override
    public Material findById(String id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Material save(Material material) {
        return repo.save(material);
    }

    @Override
    public Material update(Material material, String id) {
        Material x = this.findById(id);
        x.setName(material.getName());
        x.setCode(material.getCode());
        return repo.save(x);
    }


    @Override
    public List<Material> searchByName(String name) {
        return null;
    }

    @Override
    public Boolean delete(String id) {
        Optional<Material> optional = repo.findById(id);
        if(optional.isPresent()){
            Material kh = optional.get();
            repo.delete(kh);
            return true;
        }else{
            return false;
        }
    }
}
