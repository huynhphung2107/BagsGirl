package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.CartDTO;
import fpoly.datn.ecommerce_website.entity.Cart;

import fpoly.datn.ecommerce_website.entity.Carts;
import fpoly.datn.ecommerce_website.entity.Customer;
import fpoly.datn.ecommerce_website.repository.ICartRepository;
import fpoly.datn.ecommerce_website.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private ICartRepository repo;


    @Override
    public List<Cart> findAll() {
        return this.repo.findAll();
    }

    @Override
    public Page<Cart> findAllPhanTrang(Integer page) {
        Pageable pageable = PageRequest.of(page,5);
        return repo.findAll(pageable);
    }


    @Override
    public Cart findById(String id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Cart save(CartDTO cartDTO) {

        return null;
    }

    @Override
    public Cart update(CartDTO cartDTO, String id) {
        return null;
    }


    @Override
    public List<Cart> searchByName(String name) {
        return null;
    }

    @Override
    public Boolean delete(String id) {
        Optional<Carts> optional = repo.findById(id);
        if(optional.isPresent()){
            Carts kh = optional.get();
            repo.delete(kh);
            return true;
        }else{
            return false;
        }
    }
}
