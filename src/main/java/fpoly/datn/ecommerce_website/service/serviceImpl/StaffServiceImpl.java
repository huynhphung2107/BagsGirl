package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.StaffDTO;
import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.entity.UserRole;
import fpoly.datn.ecommerce_website.repository.IStaffRepository;
import fpoly.datn.ecommerce_website.repository.IUserInfoRepository;
import fpoly.datn.ecommerce_website.repository.IUserRoleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffServiceImpl  {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private IStaffRepository staffRepository;
    @Autowired
    private IUserInfoRepository userInfoRepository;
    @Autowired
    private IUserRoleRepository userRoleRepository;

   
    public List<Staff> findAll() {
        return this.staffRepository.findAll();
    }

    public Page<Staff> findAllStaffsWithUserInfoUserRole(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return staffRepository.findAllStaffsWithUserInfoUserRole(pageable);
    }


    public Staff findById(String id) {
        Optional<Staff> optional = staffRepository.findById(id);
        return optional.get();
    }


    public Staff save(StaffDTO staffDTO) {
//        Staff staff = new Staff();
//
//        staff.setStaffStatus(1);
//
//        UserInfo userInfo = new UserInfo();
//        userInfo.setFullName(staffDTO.getFullName());
//        userInfo.setAccount(staffDTO.getAccount());
//        userInfo.setPassword(staffDTO.getPassword());
//        userInfo.setEmail(staffDTO.getEmail());
//        userInfo.setUserInfoStatus(staffDTO.getUserInfoStatus());
//        userInfo.setGender(staffDTO.getGender());
//        userInfo.setAddress(staffDTO.getAddress());
//        userInfo.setPhoneNumber(staffDTO.getPhoneNumber());
//        userInfo.setNote(staffDTO.getNote());
//
//        UserRole userRole = userRoleRepository.findById(staffDTO.getUserInfoUserRoleId()).orElse(null);
//        if (userRole == null) {
//            throw new IllegalArgumentException("User Role not found");
//        }
//
//        userInfo.setUserRole(userRole);
//
//        UserInfo savedUserInfo = userInfoRepository.save(userInfo);


        Staff staff = modelMapper.map(staffDTO, Staff.class);
        staff.setStaffStatus(staffDTO.getStaffStatus());
        // Retrieve the UserRole using the provided userRoleId
        UserRole userRole = userRoleRepository.findById(staffDTO.getUserInfoUserRoleId())
                .orElseThrow(() -> new IllegalArgumentException("User Role not found"));
        // Map the StaffDTO to a UserInfo entity
        UserInfo userInfo = modelMapper.map(staffDTO, UserInfo.class);
        userInfo.setUserRole(userRole);
        // Save the UserInfo
        UserInfo savedUserInfo = userInfoRepository.save(userInfo);

        if (savedUserInfo != null) {
            staff.setUserInfo(savedUserInfo);

            return staffRepository.save(staff);
        } else {
            throw new IllegalStateException("Failed to save UserInfo");
        }
    }


    
    public Staff update(Staff staff) {
        return this.staffRepository.save(staff);
    }

    public Staff updateStatus(String id,Integer status){
        Staff staff = staffRepository.findById(id).get();
        staff.setStaffStatus(status);
        return staffRepository.save(staff);
    }
    
    public String delete(String id) {

        this.staffRepository.deleteById(id);
        return "Delete successfully";
    }

    
    public List<Staff> searchByName(String name) {
        return null;
    }
}
