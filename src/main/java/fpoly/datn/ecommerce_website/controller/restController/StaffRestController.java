package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.CustomerDTO;
import fpoly.datn.ecommerce_website.dto.CustomerDTO1;
import fpoly.datn.ecommerce_website.dto.StaffDTO;
import fpoly.datn.ecommerce_website.entity.Staffs;
import fpoly.datn.ecommerce_website.entity.Users;
import fpoly.datn.ecommerce_website.repository.IUserRepository;
import fpoly.datn.ecommerce_website.repository.IRoleRepository;
import fpoly.datn.ecommerce_website.service.serviceImpl.CustomerServiceImpl;
import fpoly.datn.ecommerce_website.service.serviceImpl.StaffServiceImpl;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
public class StaffRestController {

    @Autowired
    private CustomerServiceImpl customerService;
    @Autowired
    private StaffServiceImpl staffService;

    @Autowired
    private IRoleRepository userRoleService;

    @Autowired
    private IUserRepository userInfoRepository;
    @Autowired
    private ModelMapper modelMapper;

    @RequestMapping("/staff/")
    public ResponseEntity<List<StaffDTO>> getAll() {
        List<Staffs> list = staffService.findAll();
        System.out.println(list.size());
        return new ResponseEntity<>(
                list.stream().map(staff -> modelMapper.map(staff, StaffDTO.class)).collect(Collectors.toList())
                , HttpStatus.OK
        );
    }

    //GetAllPage
    @RequestMapping(value = "/staff/pagination", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "10") int pageSize
    ) {
        Page<Staffs> staffPage = staffService.findAllStaffsWithUserInfoUserRole(pageNum, pageSize);
        return new ResponseEntity<>
                (staffPage, HttpStatus.OK);
    }

    @RequestMapping(value = "/staff", method = RequestMethod.GET)
    public ResponseEntity<StaffDTO> getOne(@RequestParam("staffId") String id) {
        return new ResponseEntity<>(
                modelMapper.map(staffService.findById(id), StaffDTO.class)
                , HttpStatus.OK
        );

    }

    @RequestMapping(value = "/staff", method = RequestMethod.POST)
    public ResponseEntity<Staffs> add(@RequestBody StaffDTO staffDTO) {
        return new ResponseEntity<>(this.staffService.save(staffDTO), HttpStatus.OK);
    }


    @RequestMapping(value = "/staff", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@Valid @RequestParam String id, @RequestBody StaffDTO staffDTO) {
        return new ResponseEntity<>(staffService.update(id,staffDTO),
                HttpStatus.OK);
    }

    //updateStatus
    @RequestMapping(value = "/staff/update-status", method = RequestMethod.PUT)
    public ResponseEntity<Staffs> updateStatus(@Valid @RequestParam String id, @RequestParam int status) {
        return new ResponseEntity<>(staffService.updateStatus(id, status),
                HttpStatus.OK);

    }

    @RequestMapping(value = "/staff", method = RequestMethod.DELETE)
    public ResponseEntity<String> delete(@RequestParam String id) {
        this.staffService.delete(id);
        return new ResponseEntity<>("Delete Successfully", HttpStatus.OK);
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
