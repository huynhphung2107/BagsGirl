package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.UserInfoDTO;
import fpoly.datn.ecommerce_website.entity.Type;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.entity.UserRole;
import fpoly.datn.ecommerce_website.repository.IUserInfoRepository;
import fpoly.datn.ecommerce_website.repository.IUserRoleRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoServiceImpl{

    @Autowired
    private IUserInfoRepository userInfoRepository;

    @Autowired
    private IUserRoleRepository userRoleRepository;

    public List<UserInfo> findAll() {
        return this.userInfoRepository.findAll();
    }
    public Page<UserInfo> findAllPhanTrang(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return this.userInfoRepository.findAllAccountPhanTrang(pageable);
    }

    public UserInfo findById(String id) {
        return this.userInfoRepository.findById(id).get();
    }

    public UserInfo save(UserInfo customer) {
        return this.userInfoRepository.save(customer);
    }

    public UserInfo saveDTO(UserInfo x) {
        return userInfoRepository.save(x);

//        UserInfo userInfo = new UserInfo();
//        userInfo.setUserInfoStatus(x.getUserInfoStatus());
//        userInfo.setAccount(x.getAccount());
//        userInfo.setFullName(x.getFullName());
//        userInfo.setPassword(x.getPassword());
//        userInfo.setPhoneNumber(x.getPhoneNumber());
//        userInfo.setEmail(x.getEmail());
//        userInfo.setGender(x.getGender());
//        userInfo.setAddress(x.getAddress());
//        userInfo.setNote(x.getNote());
//        userInfo.setBirthday(x.getBirthday());
//
//        UserRole userRole = userRoleRepository.findById(x.getUserRoleId()).orElse(null);
//        if(userRole == null){
//            throw new IllegalArgumentException("UserRole not found");
//        }else{
//            userInfo.setUserRole(userRole);
//            return userInfoRepository.save(userInfo);
//        }


    }

    public UserInfo update(UserInfo customer) {
        return this.userInfoRepository.save(customer);
    }
    public UserInfo updateStatus(String id, int status){
        UserInfo userInfo = userInfoRepository.findById(id).get();
        userInfo.setUserInfoStatus(status);
        return userInfoRepository.save(userInfo);
    }

    public String delete(String id) {

        this.userInfoRepository.deleteById(id);
        return "Delete successfully";
    }

    public List<UserInfo> searchByName(String name) {
        return null;
    }
    public List<UserInfo> findCustomerByKeyword(String keyword) {
        return this.userInfoRepository.findCustomerByKeyword(keyword);
    }
}
