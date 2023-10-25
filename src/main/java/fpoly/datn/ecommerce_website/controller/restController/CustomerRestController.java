package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.CustomerDTO;
import fpoly.datn.ecommerce_website.entity.Customers;
import fpoly.datn.ecommerce_website.service.serviceImpl.CustomerServiceImpl;
import fpoly.datn.ecommerce_website.service.serviceImpl.UserServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/manage")
public class CustomerRestController {

    @Autowired
    private CustomerServiceImpl customerService;
    @Autowired
    private UserServiceImpl userInfoService;
    @Autowired
    private ModelMapper modelMapper;

    @RequestMapping("/customer/")
    public ResponseEntity<List<CustomerDTO>> getAll() {
        List<Customers> list = customerService.findAll();
        return new ResponseEntity<>(
                list.stream().map(customer -> modelMapper.map(customer, CustomerDTO.class)).collect(Collectors.toList())
                , HttpStatus.OK
        );
    }

    @RequestMapping(value = "/customer/panagition", method = RequestMethod.GET)
    public ResponseEntity<?> getAllPage(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "10") int pageSize
    ) {
//        if(customerService.)

        Page<Customers> customerPage = customerService.findAllCustomersWithUserInfoUserRole(pageNum, pageSize);
        return new ResponseEntity<>
                (customerPage, HttpStatus.OK);
    }

    @RequestMapping(value = "/customer", method = RequestMethod.GET)
    public ResponseEntity<CustomerDTO> getOne(@RequestParam("customerId") String id) {
        return new ResponseEntity<>(
                modelMapper.map(customerService.findById(id), CustomerDTO.class)
                , HttpStatus.OK
        );

    }

//    @RequestMapping(value = "/customer", method = RequestMethod.POST)
//    public ResponseEntity<?> add(@RequestBody CustomerDTO customerDTO) {
//        UserInfo userInfo = this.userInfoService.save(customerDTO.getUserInfo()); // save userInfo trước
//        customerDTO.setUserInfo(userInfo); // Set lại user info vào staff cần save (lúc này user info đã có id)
//        Customer customer = modelMapper.map(customerDTO, Customer.class);
//        return new ResponseEntity<>(this.customerService.save(customer), HttpStatus.OK);

//    }

//    @RequestMapping(value = "/customer", method = RequestMethod.PUT)
//    public ResponseEntity<?> updateFunc(@RequestBody CustomerDTO customerDTO) {
////        UserInfo userInfo = this.userInfoService.save(customerDTO.getUserInfo()); // save userInfo trước
////        customerDTO.setUserInfo(userInfo); // Set lại user info vào staff cần save (lúc này user info đã có id)
////        Customer customer = modelMapper.map(customerDTO, Customer.class);
//        return new ResponseEntity<>(this.customerService.save(customer), HttpStatus.OK);
//    }

    @RequestMapping(value = "/customer/update-status", method = RequestMethod.PUT)
    public ResponseEntity<Customers> updateStatus(@RequestParam String id, @RequestParam int status) {
        return new ResponseEntity<>(customerService.updateStatus(id, status),
                HttpStatus.OK);

    }

    @RequestMapping(value = "/customer", method = RequestMethod.DELETE)
    public ResponseEntity<String> delete(@RequestParam String id) {
        return new ResponseEntity<>(this.customerService.delete(id), HttpStatus.OK);
    }

}
