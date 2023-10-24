package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BaloDetailDTO;
import fpoly.datn.ecommerce_website.dto.StaffDTO;
import fpoly.datn.ecommerce_website.dto.UserInfoDTO;
import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.entity.UserRole;
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

@RequestMapping("/api/manage")

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

    @GetMapping("/user-info/")
    public List<UserInfo> getAll() {
        iRoleRepository.findAll();
        list = iUserInfoRepository.findAll();
        return list;
    }

    //Phan trang
    @RequestMapping(value = "/user-info/phanTrang", method = RequestMethod.GET)
    public ResponseEntity<?> phanTrang(@RequestParam(name = "page", defaultValue = "0") int pageNum,
                                       @RequestParam(name = "size", defaultValue = "10") int pageSize){
        return ResponseEntity.ok(userInfoService.findAllPhanTrang(pageNum, pageSize));
    }
    

    //getone
    @RequestMapping("/user-info")
    public ResponseEntity<UserInfoDTO> getOne(@RequestParam("id") String id) {
        UserInfo userInfo = iUserInfoRepository.findById(id).get();
        if(userInfo == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        UserInfoDTO userInfoDTO = modelMapper.map(userInfo, UserInfoDTO.class);
        UserRole userRole = userInfo.getUserRole();
        if(userInfo != null){
            userInfoDTO.setUserRoleId(userRole.getId());
            userInfoDTO.setUserRoleName(userRole.getRoleName());
        }
        return new ResponseEntity<>(userInfoDTO, HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/user-info", method = RequestMethod.POST)
    public ResponseEntity<UserInfo> add(@RequestBody UserInfoDTO userInfoDTO) {
        UserInfo x = modelMapper.map(userInfoDTO, UserInfo.class);
        return new ResponseEntity<>(this.userInfoService.saveDTO(x), HttpStatus.OK);
    }
    
    
    @RequestMapping(value = "/user-info/search", method = RequestMethod.GET)
    public ResponseEntity<?> findCustomerByKeyword(@RequestParam String keyword) {
        return new ResponseEntity<>(
                this.userInfoService.findCustomerByKeyword(keyword) .stream()
                        .map(userInfo -> modelMapper.map(userInfo, UserInfoDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }
}
