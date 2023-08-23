package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Image;
import fpoly.datn.ecommerce_website.repository.IImageRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarelTwo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageServiceImpl implements ServiceGenarelTwo<Image> {

    @Autowired
    private IImageRepository repo;


    @Override
    public List<Image> findAll() {
        return this.repo.findAll();
    }


    @Override
    public Image findById(String id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Image save(Image image) {
        return repo.save(image);
    }

    @Override
    public Image update(Image image, String id) {
        Image x = repo.findById(id).orElse(null);
        x.setUrlImage(image.getUrlImage());
        x.setCode(image.getCode());
        x.setName(image.getName());
        return repo.save(x);
    }


    @Override
    public List<Image> searchByName(String name) {
        return null;
    }

    @Override
    public Boolean delete(String id) {
        Optional<Image> optional = repo.findById(id);
        if(optional.isPresent()){
            Image kh = optional.get();
            repo.delete(kh);
            return true;
        }else{
            return false;
        }
    }
}
