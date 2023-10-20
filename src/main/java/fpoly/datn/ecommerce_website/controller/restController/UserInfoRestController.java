package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BaloDetailDTO;
import fpoly.datn.ecommerce_website.dto.UserInfoDTO;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.repository.IRoleRepository;
import fpoly.datn.ecommerce_website.repository.IUserInfoRepository;
import fpoly.datn.ecommerce_website.service.serviceImpl.UserInfoServiceImpl;
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
@RequestMapping("/api/manage/userinfo")
public class UserInfoRestController {

    @Autowired
    public IUserInfoRepository iUserInfoRepository;

    @Autowired
    public IRoleRepository iRoleRepository;
    @Autowired
    public UserInfoServiceImpl userInfoService;
    @Autowired
    private ModelMapper modelMapper;

    List<UserInfo> list = new ArrayList<>();

    @GetMapping("/")
    public List<UserInfo> getAll() {
        iRoleRepository.findAll();
        list = iUserInfoRepository.findAll();
        return list;
    }

    @PostMapping("")
    public UserInfo add(@RequestBody UserInfo userInfo) {
        iUserInfoRepository.save(userInfo);
        return userInfo;
    }

    @GetMapping("/{id}")
    public UserInfo getOne(@PathVariable("id") String id) {
        UserInfo userInfo = iUserInfoRepository.findById(id).get();
        return userInfo;
    }
    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public ResponseEntity<?> findCustomerByKeyword(@RequestParam String keyword) {
        return new ResponseEntity<>(
                this.userInfoService.findCustomerByKeyword(keyword) .stream()
                        .map(userInfo -> modelMapper.map(userInfo, UserInfoDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }
}
