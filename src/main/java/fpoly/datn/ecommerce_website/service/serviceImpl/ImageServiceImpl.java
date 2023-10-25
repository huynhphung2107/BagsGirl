package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Images;
import fpoly.datn.ecommerce_website.repository.IImageRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageServiceImpl implements ServiceGenarel<Images> {

    @Autowired
    private IImageRepository imageRepository;


    @Override
    public List<Images> findAll() {
        return this.imageRepository.findAll();
    }

    @Override
    public Images findById(String id) {
        return imageRepository.findById(id).orElse(null);
    }

    @Override
    public Images save(Images image) {
        return imageRepository.save(image);
    }

    @Override
    public Images update(Images image) {
        return imageRepository.save(image);
    }


    @Override
    public List<Images> searchByName(String name) {
        return null;
    }

    @Override
    public String delete(String id) {
        Optional<Images> optional = imageRepository.findById(id);
        if (optional.isPresent()) {
            Images kh = optional.get();
            imageRepository.delete(kh);
            return "Delete successfully";
        } else {
            return "Delete Unsuccessfully";
        }
    }
}
