package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.CustomerDTO;
import fpoly.datn.ecommerce_website.entity.Customers;
import fpoly.datn.ecommerce_website.entity.Roles;
import fpoly.datn.ecommerce_website.entity.Users;
import fpoly.datn.ecommerce_website.repository.ICustomerRepository;
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
public class CustomerServiceImpl {

    @Autowired
    private ICustomerRepository customerRepository;

    @Autowired
    private ModelMapper modelMapper;
    
    @Autowired
    private IUserRepository userInfoRepository;
    @Autowired
    private IRoleRepository userRoleRepository;


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


    public Customers save(CustomerDTO customerDTO) {

        Customers customer = modelMapper.map(customerDTO, Customers.class);
        customer.setCustomerStatus(customerDTO.getCustomerStatus());
        customer.setCustomerPoint(customerDTO.getCustomerPoint());
        // Retrieve the UserRole using the provided userRoleId
        Roles userRole = userRoleRepository.findById(customerDTO.getUsersRolesRoleId())
                .orElseThrow(() -> new IllegalArgumentException("User Role not found"));
        // Map the customerDTO to a UserInfo entity
        Users userInfo = modelMapper.map(customerDTO, Users.class);
        userInfo.setRoles(userRole);
        // Save the UserInfo
        Users savedUserInfo = userInfoRepository.save(userInfo);

        if (savedUserInfo != null) {
            customer.setUsers(savedUserInfo);

            return customerRepository.save(customer);
        } else {
            throw new IllegalStateException("Failed to save UserInfo");
        }
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
