package fpoly.datn.ecommerce_website.service.serviceImpl;


import fpoly.datn.ecommerce_website.entity.Users;
import fpoly.datn.ecommerce_website.repository.IUserRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class UserServiceImpl implements ServiceGenarel<Users> {

    @Autowired
    private IUserRepository userInfoRepository;


    @Override
    public List<Users> findAll() {
        return this.userInfoRepository.findAll();
    }
    public Page<Users> findAllPhanTrang(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return this.userInfoRepository.findAllAccountPhanTrang(pageable);
    }


    @Override
    public Users findById(String id) {
        return this.userInfoRepository.findById(id).get();
    }

    @Override
    public Users save(Users customer) {
        return this.userInfoRepository.save(customer);
    }

    @Override
    public Users update(Users customer) {
        return this.userInfoRepository.save(customer);
    }
    public Users updateStatus(String id, int status){
        Users userInfo = userInfoRepository.findById(id).get();
        userInfo.setUserStatus(status);
        return userInfoRepository.save(userInfo);
    }

    public String delete(String id) {

        this.userInfoRepository.deleteById(id);
        return "Delete successfully";
    }


    @Override
    public List<Users> searchByName(String name) {
        return null;
    }

    public List<Users> findCustomerByKeyword(String keyword) {
        return this.userInfoRepository.findCustomerByKeyword(keyword);
    }
}
