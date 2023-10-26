package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Materials;
import fpoly.datn.ecommerce_website.repository.IMaterialRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaterialServiceImpl implements ServiceGenarel<Materials> {
    @Autowired
    private IMaterialRepository materialRepository;


    @Override
    public List<Materials> findAll() {
        return materialRepository.findAll();
    }

    public Page<Materials> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return this.materialRepository.findAll(pageable);
    }



    @Override
    public Materials findById(String id) {
        return materialRepository.findById(id).orElse(null);
    }

    @Override
    public Materials save(Materials material) {
        return materialRepository.save(material);
    }

    @Override
    public Materials update(Materials material) {
        return materialRepository.save(material);
    }

    public Materials updateStatus(String id, int status) {
        Materials material = materialRepository.findById(id).get();
        material.setMaterialStatus(status);
        return materialRepository.save(material);

    }

    @Override
    public List<Materials> searchByName(String name) {
        return null;
    }

    @Override
    public String delete(String id) {
        Optional<Materials> optional = materialRepository.findById(id);
        if (optional.isPresent()) {
            Materials kh = optional.get();
            materialRepository.delete(kh);
            return "Delete successfully";
        } else {
            return "Delete Unsuccessfully";
        }
    }
}
