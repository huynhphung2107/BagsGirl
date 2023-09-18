package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Image;
import fpoly.datn.ecommerce_website.repository.IImageRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageServiceImpl implements ServiceGenarel<Image> {

    @Autowired
    private IImageRepository imageRepository;


    @Override
    public List<Image> findAll() {
        return this.imageRepository.findAll();
    }

    @Override
    public Image findById(String id) {
        return imageRepository.findById(id).orElse(null);
    }

    @Override
    public Image save(Image image) {
        return imageRepository.save(image);
    }

    @Override
    public Image update(Image image) {
        return imageRepository.save(image);
    }


    @Override
    public List<Image> searchByName(String name) {
        return null;
    }

    @Override
    public String delete(String id) {
        Optional<Image> optional = imageRepository.findById(id);
        if (optional.isPresent()) {
            Image kh = optional.get();
            imageRepository.delete(kh);
            return "Delete successfully";
        } else {
            return "Delete Unsuccessfully";
        }
    }
}
