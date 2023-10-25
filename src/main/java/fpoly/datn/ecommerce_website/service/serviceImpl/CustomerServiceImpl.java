package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Customers;
import fpoly.datn.ecommerce_website.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl {

    @Autowired
    private ICustomerRepository customerRepository;

    public Page<Customers> findAllCustomersWithUserInfoUserRole(Integer page, Integer size) {
        Pageable pageable  =PageRequest.of(page,size);
        return customerRepository.findAllCustomersWithUsersRoles(pageable);
    }


    public List<Customers> findAll() {
        return this.customerRepository.findAll();
    }


    public Customers findById(String id) {
        return this.customerRepository.findById(id).get();
    }


    public Customers save(Customers customer) {
        return this.customerRepository.save(customer);
    }


    public Customers update(Customers customer) {
        return this.customerRepository.save(customer);
    }


    public Customers updateStatus(String id, Integer status) {
        Customers customer = customerRepository.findById(id).get();
        customer.setCustomerStatus(status);
        return this.customerRepository.save(customer);
    }


    public String delete(String id) {

        this.customerRepository.deleteById(id);
        return "Delete successfully";
    }


    public List<Customers> searchByName(String name) {
        return null;
    }
}
