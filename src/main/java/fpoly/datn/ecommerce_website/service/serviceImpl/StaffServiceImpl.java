package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.StaffDTO;
import fpoly.datn.ecommerce_website.entity.Staffs;
import fpoly.datn.ecommerce_website.entity.Users;
import fpoly.datn.ecommerce_website.entity.Roles;
import fpoly.datn.ecommerce_website.repository.IStaffRepository;
import fpoly.datn.ecommerce_website.repository.IUserRepository;
import fpoly.datn.ecommerce_website.repository.IRoleRepository;
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
    private IUserRepository userInfoRepository;
    @Autowired
    private IRoleRepository userRoleRepository;

   
    public List<Staffs> findAll() {
        return this.staffRepository.findAll();
    }

    public Page<Staffs> findAllStaffsWithUserInfoUserRole(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return staffRepository.findAllStaffsWithUsersRoles(pageable);
    }


    public Staffs findById(String id) {
        Optional<Staffs> optional = staffRepository.findById(id);
        return optional.get();
    }


    public Staffs save(StaffDTO staffDTO) {
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


        Staffs staff = modelMapper.map(staffDTO, Staffs.class);
        staff.setStaffStatus(staffDTO.getStaffStatus());
        // Retrieve the UserRole using the provided userRoleId
        Roles userRole = userRoleRepository.findById(staffDTO.getUsersRolesRoleId())
                .orElseThrow(() -> new IllegalArgumentException("User Role not found"));
        // Map the StaffDTO to a UserInfo entity
        Users userInfo = modelMapper.map(staffDTO, Users.class);
        userInfo.setRoles(userRole);
        // Save the UserInfo
        Users savedUserInfo = userInfoRepository.save(userInfo);

        if (savedUserInfo != null) {
            staff.setUsers(savedUserInfo);

            return staffRepository.save(staff);
        } else {
            throw new IllegalStateException("Failed to save UserInfo");
        }
    }


    
    public Staffs update(Staffs staff) {
        return this.staffRepository.save(staff);
    }

    public Staffs updateStatus(String id, Integer status){
        Staffs staff = staffRepository.findById(id).get();
        staff.setStaffStatus(status);
        return staffRepository.save(staff);
    }
    
    public String delete(String id) {

        this.staffRepository.deleteById(id);
        return "Delete successfully";
    }

    
    public List<Staffs> searchByName(String name) {
        return null;
    }
}
