package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Customer;
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

    public Page<Customer> findAllCustomersWithUserInfoUserRole(Integer page, Integer size) {
        Pageable pageable  =PageRequest.of(page,size);
        return customerRepository.findAllCustomersWithUserInfoUserRole(pageable);
    }


    public List<Customer> findAll() {
        return this.customerRepository.findAll();
    }


    public Customer findById(String id) {
        return this.customerRepository.findById(id).get();
    }


    public Customer save(Customer customer) {
        return this.customerRepository.save(customer);
    }


    public Customer update(Customer customer) {
        return this.customerRepository.save(customer);
    }


    public Customer updateStatus(String id, Integer status) {
        Customer customer = customerRepository.findById(id).get();
        customer.setCustomerStatus(status);
        return this.customerRepository.save(customer);
    }


    public String delete(String id) {

        this.customerRepository.deleteById(id);
        return "Delete successfully";
    }


    public List<Customer> searchByName(String name) {
        return null;
    }
}
