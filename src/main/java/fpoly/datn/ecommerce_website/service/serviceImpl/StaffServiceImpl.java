package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.StaffDTO;
import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.entity.UserRole;
import fpoly.datn.ecommerce_website.repository.IStaffRepository;
import fpoly.datn.ecommerce_website.repository.IUserInfoRepository;
import fpoly.datn.ecommerce_website.repository.IUserRoleRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
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
    private IStaffRepository staffRepository;
    @Autowired
    private IUserInfoRepository userInfoRepository;
    @Autowired
    private IUserRoleRepository userRoleRepository;
    @Autowired
    private ModelMapper modelMapper;
   
    public List<Staff> findAll() {
        return this.staffRepository.findAll();
    }

    public Page<Staff> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return staffRepository.findAll(pageable);
    }


    public Staff findById(String id) {
        Optional<Staff> optional = staffRepository.findById(id);
        return optional.get();
    }


    public Staff save(StaffDTO staffDTO) {
            return staffRepository.save(modelMapper.map(staffDTO, Staff.class));
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
