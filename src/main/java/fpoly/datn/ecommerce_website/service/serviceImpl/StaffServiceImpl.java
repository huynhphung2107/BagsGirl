package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.StaffDTO1;
import fpoly.datn.ecommerce_website.entity.Customers;
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

    public Page<Staffs> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return staffRepository.getAllPage(pageable);
    }

    public Page<Staffs> findAllSearch(String search, Integer page, Integer size){
        Pageable pageable = PageRequest.of(page, size);
        return staffRepository.findallSearch(search, pageable);
    }



    public Staffs findById(String id) {
        Optional<Staffs> optional = staffRepository.findById(id);
        return optional.get();
    }


    public Staffs save(StaffDTO1 staffDTO) {
        Staffs staff = modelMapper.map(staffDTO, Staffs.class);
        staff.setStaffStatus(1);
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



    public Staffs update(String staffId, StaffDTO1 staffDTO) {
        Staffs staffs = staffRepository.findById(staffId)
                .orElseThrow(() -> new IllegalArgumentException("Customer not found"));
        modelMapper.map(staffDTO, staffs);
        Users userInfo = modelMapper.map(staffDTO, Users.class);
        Users savedUserInfo = userInfoRepository.save(userInfo);
        if (savedUserInfo != null) {
            return staffRepository.save(staffs);
        } else {
            throw new IllegalStateException("Failed to save UserInfo");

        }

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
