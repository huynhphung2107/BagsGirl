package fpoly.datn.ecommerce_website.service.serviceImpl;


import fpoly.datn.ecommerce_website.entity.ProductDetails;
import fpoly.datn.ecommerce_website.repository.IBaloDetailRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BaloDetailServiceImpl implements ServiceGenarel<ProductDetails> {

    @Autowired
    private IBaloDetailRepository iBaloDetailRepository;
  
    @Override
    public List<ProductDetails> findAll() {
        return iBaloDetailRepository.findAll();
    }
    public  List<ProductDetails> findAllByBalo(String baloID){
        return this.iBaloDetailRepository.findAllByBalo_BaloCode(baloID);
    }
    @Override
    public ProductDetails findById(String id) {
        Optional<ProductDetails> optional = iBaloDetailRepository.findById(id);
        return optional.get();
    }

    @Override
    public ProductDetails save(ProductDetails entity) {
        return iBaloDetailRepository.save(entity);
    }

    @Override
    public ProductDetails update(ProductDetails entity) {
        return iBaloDetailRepository.save(entity);
    }

    @Override
    public String delete(String id) {
        iBaloDetailRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<ProductDetails> searchByName(String name) {
        return null;
    }

    public  List<ProductDetails> findByKeyword(String keyword){

        return this.iBaloDetailRepository.findByKeyword(keyword);
    }
}
