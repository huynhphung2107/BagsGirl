package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.CustomerDTO;
import fpoly.datn.ecommerce_website.entity.Customer;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.service.serviceImpl.CustomerServiceImpl;
import fpoly.datn.ecommerce_website.service.serviceImpl.UserInfoServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/manage")
public class CustomerRestController {

    @Autowired
    private CustomerServiceImpl customerService;
    @Autowired
    private UserInfoServiceImpl userInfoService;
    @Autowired
    private ModelMapper modelMapper;

    @RequestMapping("/customer/")
    public ResponseEntity<List<CustomerDTO>> getAll() {
        List<Customer> list = customerService.findAll();
        return new ResponseEntity<>(
                list.stream().map(customer -> modelMapper.map(customer, CustomerDTO.class)).collect(Collectors.toList())
                , HttpStatus.OK
        );
    }

    @RequestMapping(value = "/customer", method = RequestMethod.GET)
    public ResponseEntity<CustomerDTO> getOne(@RequestParam("id") String id) {
        return new ResponseEntity<>(
                modelMapper.map(customerService.findById(id), CustomerDTO.class)
                , HttpStatus.OK
        );

    }

    @RequestMapping(value = "/customer", method = RequestMethod.POST)
    public ResponseEntity<?> add(@RequestBody CustomerDTO customerDTO) {
        UserInfo userInfo = this.userInfoService.save(customerDTO.getUserInfo()); // save userInfo trước
        customerDTO.setUserInfo(userInfo); // Set lại user info vào staff cần save (lúc này user info đã có id)
        Customer customer = modelMapper.map(customerDTO, Customer.class);
        return new ResponseEntity<>(this.customerService.save(customer), HttpStatus.OK);

    }

    @RequestMapping(value = "/customer", method = RequestMethod.PUT)
    public ResponseEntity<?> updateFunc(@RequestBody CustomerDTO customerDTO) {
        UserInfo userInfo = this.userInfoService.save(customerDTO.getUserInfo()); // save userInfo trước
        customerDTO.setUserInfo(userInfo); // Set lại user info vào staff cần save (lúc này user info đã có id)
        Customer customer = modelMapper.map(customerDTO, Customer.class);
        return new ResponseEntity<>(this.customerService.save(customer), HttpStatus.OK);
    }

    @RequestMapping(value = "/customer", method = RequestMethod.DELETE)
    public ResponseEntity<String> delete(@RequestParam String id) {
        return new ResponseEntity<>(this.customerService.delete(id), HttpStatus.OK);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMesssage = error.getDefaultMessage();
            errors.put(fieldName, errorMesssage);
        });
        return errors;
    }

}
