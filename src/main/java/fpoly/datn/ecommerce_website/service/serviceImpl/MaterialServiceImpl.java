package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Material;
import fpoly.datn.ecommerce_website.repository.IMaterialRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaterialServiceImpl implements ServiceGenarel<Material> {
    @Autowired
    private IMaterialRepository materialRepository;


    @Override
    public List<Material> findAll() {
        return materialRepository.findAll();
    }


    @Override
    public Material findById(String id) {
        return materialRepository.findById(id).orElse(null);
    }

    @Override
    public Material save(Material material) {
        return materialRepository.save(material);
    }

    @Override
    public Material update(Material material) {
        return materialRepository.save(material);
    }


    @Override
    public List<Material> searchByName(String name) {
        return null;
    }

    @Override
    public String delete(String id) {
        Optional<Material> optional = materialRepository.findById(id);
        if (optional.isPresent()) {
            Material kh = optional.get();
            materialRepository.delete(kh);
            return "Delete successfully";
        } else {
            return "Delete Unsuccessfully";
        }
    }
}
