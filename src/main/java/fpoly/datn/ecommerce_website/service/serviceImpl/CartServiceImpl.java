package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.CartDTO;
import fpoly.datn.ecommerce_website.entity.Cart;

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
        Cart cart = cartDTO.validate(new Cart());
        return repo.save(cart);
    }

    @Override
    public Cart update(CartDTO cartDTO, String id) {
        Cart x = cartDTO.validate(repo.findById(id).orElse(null));
        x.setCode(cartDTO.getCode());
        x.setCreateTime(cartDTO.getCreateTime());
        x.setPaymentTime(cartDTO.getPaymentTime());
        x.setNote(cartDTO.getNote());
        x.setStatus(cartDTO.getStatus());
        x.setCustomer(Customer.builder().id(cartDTO.getCustomer()).build());
        return repo.save(x);
    }


    @Override
    public List<Cart> searchByName(String name) {
        return null;
    }

    @Override
    public Boolean delete(String id) {
        Optional<Cart> optional = repo.findById(id);
        if(optional.isPresent()){
            Cart kh = optional.get();
            repo.delete(kh);
            return true;
        }else{
            return false;
        }
    }
}
