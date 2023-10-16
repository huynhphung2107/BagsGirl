package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.repository.IUserInfoRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoServiceImpl implements ServiceGenarel<UserInfo> {

    @Autowired
    private IUserInfoRepository userInfoRepository;

    @Override
    public List<UserInfo> findAll() {
        return this.userInfoRepository.findAll();
    }

    @Override
    public UserInfo findById(String id) {
        return this.userInfoRepository.findById(id).get();
    }

    @Override
    public UserInfo save(UserInfo customer) {
        return this.userInfoRepository.save(customer);
    }

    @Override
    public UserInfo update(UserInfo customer) {
        return this.userInfoRepository.save(customer);
    }

    @Override
    public String delete(String id) {

        this.userInfoRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<UserInfo> searchByName(String name) {
        return null;
    }
    public List<UserInfo> findByKeyword(String keyword) {
        return this.userInfoRepository.findByKeyword(keyword);
    }
}
