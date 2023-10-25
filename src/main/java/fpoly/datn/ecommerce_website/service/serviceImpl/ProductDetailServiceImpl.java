package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.ProductDetails;
import fpoly.datn.ecommerce_website.repository.IProductDetailRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductDetailServiceImpl implements ServiceGenarel<ProductDetails> {

    @Autowired
    private IProductDetailRepository iProductDetailRepository;
  
    @Override
    public List<ProductDetails> findAll() {
        return iProductDetailRepository.findAll();
    }
    public  List<ProductDetails> findAllByProduct(String baloID){
        return this.iProductDetailRepository.findAllByProduct_ProductCode(baloID);
    }
    @Override
    public ProductDetails findById(String id) {
        Optional<ProductDetails> optional = iProductDetailRepository.findById(id);
        return optional.get();
    }

    @Override
    public ProductDetails save(ProductDetails entity) {
        return iProductDetailRepository.save(entity);
    }

    @Override
    public ProductDetails update(ProductDetails entity) {
        return iProductDetailRepository.save(entity);
    }

    @Override
    public String delete(String id) {
        iProductDetailRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<ProductDetails> searchByName(String name) {
        return null;
    }

    public  List<ProductDetails> findByKeyword(String keyword){

        return this.iProductDetailRepository.findByKeyword(keyword);
    }
}
