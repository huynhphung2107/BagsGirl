package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.UserInfoDTO;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.repository.ICustomerRepository;
import fpoly.datn.ecommerce_website.repository.IUserInfoRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserInfoServiceImpl implements ServiceGenarel<UserInfoDTO> {

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private IUserInfoRepository userInfoRepository;
    @Autowired
    private ICustomerRepository customerRepository;

    @Override
    public List<UserInfoDTO> findAll() {
        return this.userInfoRepository.findAll().stream()
                .map(o -> modelMapper.map(o, UserInfoDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public UserInfoDTO findById(String id) {
        return modelMapper.map(this.userInfoRepository.findById(id).get(), UserInfoDTO.class);
    }

    @Override
    public UserInfoDTO save(UserInfoDTO customer) {
        UserInfo userInfo = this.userInfoRepository.save(modelMapper.map(customer, UserInfo.class));
        return modelMapper.map(userInfo, UserInfoDTO.class);
    }

    @Override
    public UserInfoDTO update(UserInfoDTO customer) {
        UserInfo userInfo = this.userInfoRepository.save(modelMapper.map(customer, UserInfo.class));
        return modelMapper.map(userInfo, UserInfoDTO.class);
    }

    @Override
    public String delete(String id) {

        this.userInfoRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<UserInfoDTO> searchByName(String name) {
        return null;
    }
    public List<UserInfoDTO> findCustomerByKeyword(String keyword) {
        return this.customerRepository.findCustomerByKeyword(keyword).stream().map(userInfo -> modelMapper.map(userInfo, UserInfoDTO.class))
                .collect(Collectors.toList());
    }
}
