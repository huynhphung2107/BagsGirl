package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.CustomerDTO;
import fpoly.datn.ecommerce_website.entity.Customers;
import org.springframework.data.domain.Page;

import java.util.List;


public interface ICustomerService {

    Page<Customers> findAllCustomersWithUserInfoUserRole(Integer page, Integer size);

    List<Customers> findAll();

    Customers findById(String id);

//    Customers save(Customers customer);
//
//    Customers update(Customers customer);

    Customers updateStatus(String id, Integer status);

    String delete(String id);

    List<CustomerDTO> findByKeyword(String keyword);
}
