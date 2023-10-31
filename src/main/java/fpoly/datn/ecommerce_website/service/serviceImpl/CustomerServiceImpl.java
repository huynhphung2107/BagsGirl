package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.CustomerDTO;
import fpoly.datn.ecommerce_website.entity.Customers;
import fpoly.datn.ecommerce_website.entity.Roles;
import fpoly.datn.ecommerce_website.entity.Users;
import fpoly.datn.ecommerce_website.repository.ICustomerRepository;

import fpoly.datn.ecommerce_website.service.ICustomerService;

import fpoly.datn.ecommerce_website.repository.IRoleRepository;
import fpoly.datn.ecommerce_website.repository.IUserRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServiceImpl implements ICustomerService {

    @Autowired
    private ICustomerRepository customerRepository;
    @Autowired
    private ModelMapper modelMapper;

    

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private IUserRepository userInfoRepository;
    @Autowired
    private IRoleRepository userRoleRepository;
    @Override
    public Page<Customers> findAllCustomersWithUserInfoUserRole(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return customerRepository.findAllCustomersWithUsersRoles(pageable);
    }


    @Override
    public List<Customers> findAll() {
        return this.customerRepository.findAll();
    }


    @Override
    public Customers findById(String id) {
        return this.customerRepository.findById(id).get();
    }


    public Customers save(CustomerDTO customerDTO) {

        Customers customer = modelMapper.map(customerDTO, Customers.class);
        customer.setCustomerStatus(customerDTO.getCustomerStatus());
        customer.setCustomerPoint(customerDTO.getCustomerPoint());
        Roles userRole = userRoleRepository.findById(customerDTO.getUsersRolesRoleId())
                .orElseThrow(() -> new IllegalArgumentException("User Role not found"));
        Users userInfo = modelMapper.map(customerDTO, Users.class);
        userInfo.setRoles(userRole);
        Users savedUserInfo = userInfoRepository.save(userInfo);
        if (savedUserInfo != null) {
            customer.setUsers(savedUserInfo);

            return customerRepository.save(customer);
        } else {
            throw new IllegalStateException("Failed to save UserInfo");
        }
    }


    public Customers update(String customerId, CustomerDTO customerDTO) {
        Customers customers = customerRepository.findById(customerId)
                .orElseThrow(() -> new IllegalArgumentException("Customer not found"));
        modelMapper.map(customerDTO, customers);
        Users userInfo = modelMapper.map(customerDTO, Users.class);
//        Roles userRole = userRoleRepository.findById(customerDTO.getUsersRolesRoleId())
//                .orElseThrow(() -> new IllegalArgumentException("User Role not found"));
//        userInfo.setRoles(userRole);
        Users savedUserInfo = userInfoRepository.save(userInfo);
        if (savedUserInfo != null) {
//            customers.setUsers(savedUserInfo);
            return customerRepository.save(customers);
        } else {
            throw new IllegalStateException("Failed to save UserInfo");

        }

    }


    @Override
    public Customers updateStatus(String id, Integer status) {
        Customers customer = customerRepository.findById(id).get();
        customer.setCustomerStatus(status);
        return this.customerRepository.save(customer);
    }


    @Override
    public String delete(String id) {

        this.customerRepository.deleteById(id);
        return "Delete successfully";
    }


    @Override
    public List<CustomerDTO> findByKeyword(String keyword) {
        List<Customers> customers = this.customerRepository.findByKeyword(keyword);
        return customers.stream()
                .map(c -> modelMapper.map(c, CustomerDTO.class))
                .toList();
    }

}
