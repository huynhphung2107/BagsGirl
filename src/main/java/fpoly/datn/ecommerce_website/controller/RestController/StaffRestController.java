package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.CustomErrorType;
import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.repository.IStaffRepository;
import fpoly.datn.ecommerce_website.repository.IUserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RequestMapping("dashboard/edit")
@RestController
public class StaffRestController {




    @Autowired
    private IStaffRepository staffRepository;

    @Autowired
    private IUserInfoRepository userInfoRepository;

    @RequestMapping(value = "/staff", method = RequestMethod.GET)
    public ResponseEntity<List<Staff>> getAll() {
        List<Staff> list = new ArrayList<>();
        userInfoRepository.findAll();
        list = staffRepository.findAll();
        if (list == null){
            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


    @RequestMapping(value = "/staff", method = RequestMethod.POST)
    public ResponseEntity<Staff> add(@RequestBody Staff staffParam) {
        UserInfo userInfo = userInfoRepository.save(staffParam.getUserInfo());
        System.out.println(userInfo);
        Staff nv = Staff.builder()
                .status(staffParam.getStatus())
                .userInfo(userInfo)
                .build();
        Staff staff = staffRepository.save(nv);
        System.out.println(nv);
       if (staff == null){
           return new ResponseEntity<>( HttpStatus.NO_CONTENT);
       }
        return new ResponseEntity<>(staff, HttpStatus.OK);
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
        if (staff == null){
            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(staff, HttpStatus.OK);
    }

    @RequestMapping(value = "/staff/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable String id) {
//
        Staff staff  = staffRepository.findById(id).get();
        if (staff == null){
            return new ResponseEntity<>( new CustomErrorType("Unable To Delete with id" + id + "not found"), HttpStatus.NOT_FOUND);
        }

        this.staffRepository.delete(staff);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
