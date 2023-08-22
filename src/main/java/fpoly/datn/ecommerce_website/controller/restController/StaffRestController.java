package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.entity.CustomErrorType;
import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.repository.IRoleRepository;
import fpoly.datn.ecommerce_website.repository.IStaffRepository;
import fpoly.datn.ecommerce_website.repository.IUserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/manage")
public class StaffRestController {

    @Autowired
    private IStaffRepository staffRepository;

    @Autowired
    private IRoleRepository iRoleRepository;

    @Autowired
    private IUserInfoRepository userInfoRepository;

    @RequestMapping("/staff")
    public List<Staff> getAll() {
        userInfoRepository.findAll();
        iRoleRepository.findAll();
        List<Staff> list = staffRepository.findAll();
        System.out.println(list);
        return list;
    }

    @GetMapping("/staff/{id}")
    public Staff getOne(@PathVariable("id") String id) {
        Staff staff = staffRepository.findById(id).get();
        return staff;

    }

//    @RequestMapping(value = "/staff", method = RequestMethod.GET)
//    public ResponseEntity<List<Staff>> getAll() {
//        List<Staff> list = new ArrayList<>();
//        userInfoRepository.findAll();
//        list = staffRepository.findAll();
//        if (list == null){
//            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(list, HttpStatus.OK);
//    }


    @RequestMapping(value = "/staff", method = RequestMethod.POST)
    public ResponseEntity<Staff> add(@RequestBody Staff staffParam) {

        UserInfo newUserInfo = UserInfo.builder()
                .fullName(staffParam.getUserInfo().getFullName())
                .account(staffParam.getUserInfo().getAccount())
                .password(staffParam.getUserInfo().getPassword())
                .email(staffParam.getUserInfo().getEmail())
                .status(staffParam.getUserInfo().getStatus())
                .gender(staffParam.getUserInfo().getGender())
                .userRole(staffParam.getUserInfo().getUserRole())
                .build();
        Staff newStaff = Staff.builder()
                .status(staffParam.getStatus())
                .userInfo(this.userInfoRepository.save(newUserInfo))
                .build();


        return new ResponseEntity<>(this.staffRepository.save(newStaff), HttpStatus.OK);

    }

    @RequestMapping(value = "/staff", method = RequestMethod.PUT)
    public ResponseEntity<Staff> updateFunc(@RequestBody Staff staffParam) {
        UserInfo userInfo = userInfoRepository.save(staffParam.getUserInfo());
        System.out.println(userInfo);
        Staff nv = Staff.builder()
                .status(staffParam.getStatus())
                .userInfo(userInfo)
                .build();
        Staff staff = staffRepository.save(nv);
        System.out.println(nv);
        if (staff == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(staff, HttpStatus.OK);
    }

    @RequestMapping(value = "/staff/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable String id) {
        Staff staff = staffRepository.findById(id).get();
        if (staff == null) {
            return new ResponseEntity<>(new CustomErrorType("Unable To Delete with id" + id + "not found"), HttpStatus.NOT_FOUND);
        }
        this.staffRepository.delete(staff);
        userInfoRepository.delete(staff.getUserInfo());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
