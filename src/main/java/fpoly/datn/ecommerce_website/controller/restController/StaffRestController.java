package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.StaffDTO;
import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.repository.IRoleRepository;
import fpoly.datn.ecommerce_website.repository.IStaffRepository;
import fpoly.datn.ecommerce_website.repository.IUserInfoRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/manage")
public class StaffRestController {

    @Autowired
    private IStaffRepository staffRepository;

    @Autowired
    private IRoleRepository iRoleRepository;

    @Autowired
    private IUserInfoRepository userInfoRepository;
    @Autowired
    private ModelMapper modelMapper;

    @RequestMapping("/staff/")
    public ResponseEntity<List<StaffDTO>> getAll() {
        List<Staff> list = staffRepository.findAll();
        return new ResponseEntity<>(
                list.stream().map(staff -> modelMapper.map(staff, StaffDTO.class)).collect(Collectors.toList())
                , HttpStatus.OK
        );
    }

    @RequestMapping(value = "/staff", method = RequestMethod.GET)
    public ResponseEntity<StaffDTO> getOne(@RequestParam("id") String id) {
        return new ResponseEntity<>(
                modelMapper.map(staffRepository.findById(id).get(), StaffDTO.class)
                , HttpStatus.OK
        );

    }

    @RequestMapping(value = "/staff", method = RequestMethod.POST)
    public ResponseEntity<Staff> add(@RequestBody StaffDTO staffDTOParam) {
        UserInfo userInfo = this.userInfoRepository.save(staffDTOParam.getUserInfo()); // save userInfo trước
        staffDTOParam.setUserInfo(userInfo); // Set lại user info vào staff cần save (lúc này user info đã có id)
        Staff staff = modelMapper.map(staffDTOParam, Staff.class);
        return new ResponseEntity<>(this.staffRepository.save(staff), HttpStatus.OK);

    }

    @RequestMapping(value = "/staff", method = RequestMethod.PUT)
    public ResponseEntity<?> updateFunc(@RequestBody StaffDTO staffDTOParam) {
        UserInfo userInfo = this.userInfoRepository.save(staffDTOParam.getUserInfo()); // save userInfo trước
        staffDTOParam.setUserInfo(userInfo); // Set lại user info vào staff cần save (lúc này user info đã có id)
        Staff staff = modelMapper.map(staffDTOParam, Staff.class);
        return new ResponseEntity<>(staff, HttpStatus.OK);
    }

    @RequestMapping(value = "/staff", method = RequestMethod.DELETE)
    public ResponseEntity<String> delete(@RequestParam String id) {
        Staff staff = this.staffRepository.findById(id).get();
        this.staffRepository.delete(staff);
        return new ResponseEntity<>("Delete Successfully", HttpStatus.OK);
    }


}
