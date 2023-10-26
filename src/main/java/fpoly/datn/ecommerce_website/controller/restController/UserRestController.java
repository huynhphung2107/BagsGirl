package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.UserDTO;
import fpoly.datn.ecommerce_website.entity.Users;
import fpoly.datn.ecommerce_website.repository.IRoleRepository;
import fpoly.datn.ecommerce_website.repository.IUserRepository;
import fpoly.datn.ecommerce_website.service.serviceImpl.UserServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController

@RequestMapping("/api/manage/user")

public class UserRestController {

    @Autowired
    public IUserRepository iUserInfoRepository;

    @Autowired
    public IRoleRepository iRoleRepository;
    @Autowired
    public UserServiceImpl userInfoService;
    @Autowired
    private ModelMapper modelMapper;

    List<Users> list = new ArrayList<>();

    @GetMapping("/")
    public List<Users> getAll() {
        iRoleRepository.findAll();
        list = iUserInfoRepository.findAll();
        return list;
    }

    @PostMapping("")
    public Users add(@RequestBody Users userInfo) {
        iUserInfoRepository.save(userInfo);
        return userInfo;
    }

    @GetMapping("/{id}")
    public Users getOne(@PathVariable("userId") String id) {
        Users userInfo = iUserInfoRepository.findById(id).get();
        return userInfo;
    }
    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public ResponseEntity<?> findCustomerByKeyword(@RequestParam String keyword) {
        return new ResponseEntity<>(
                this.userInfoService.findCustomerByKeyword(keyword) .stream()
                        .map(userInfo -> modelMapper.map(userInfo, UserDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }
}
