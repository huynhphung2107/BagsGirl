package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.entity.UserRole;
import fpoly.datn.ecommerce_website.repository.IRoleRepository;
import fpoly.datn.ecommerce_website.repository.IUserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/dashboard/userinfo")
public class UserInfoRestController {

    @Autowired
    public IUserInfoRepository iUserInfoRepository;

    @Autowired
    public IRoleRepository iRoleRepository;

    List<UserInfo> list = new ArrayList<>();

    @GetMapping("")
    public List<UserInfo> getAll() {
        iRoleRepository.findAll();
        list = iUserInfoRepository.findAll();
        System.out.println(list);
        return list;
    }

    @PostMapping("")
    public UserInfo add(@RequestBody UserInfo userInfo) {

//        UserInfo userInfo1 = UserInfo.builder()
//                .fullName(userInfo.getFullName())
//                .account(userInfo.getAccount())
//                .password(userInfo.getPassword())
//                .email(userInfo.getEmail())
//                .status(userInfo.getStatus())
//                .gender(userInfo.getGender())
//                .userRole(iRoleRepository.findById(userInfo.getId()).get())
//                .build();
//        iUserInfoRepository.save(userInfo1);
//        System.out.println(iUserInfoRepository.save(userInfo1));
        iUserInfoRepository.save(userInfo);
        return userInfo;
    }

    @GetMapping("/{id}")
    public UserInfo getOne(@PathVariable("id") String id) {
        UserInfo userInfo = iUserInfoRepository.findById(id).get();
        return userInfo;

    }

}
