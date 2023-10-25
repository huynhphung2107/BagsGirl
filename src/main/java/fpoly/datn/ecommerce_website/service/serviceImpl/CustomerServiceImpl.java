package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Customers;
import fpoly.datn.ecommerce_website.repository.ICustomerRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements ServiceGenarel<Customers> {

    @Autowired
    private ICustomerRepository customerRepository;

    @Override
    public List<Customers> findAll() {
        return this.customerRepository.findAll();
    }

    @Override
    public Customers findById(String id) {
        return this.customerRepository.findById(id).get();
    }

    @Override
    public Customers save(Customers customer) {
        return this.customerRepository.save(customer);
    }

    @Override
    public Customers update(Customers customer) {
        return this.customerRepository.save(customer);
    }

    @Override
    public String delete(String id) {

        this.customerRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<Customers> searchByName(String name) {
        return null;
    }
}
