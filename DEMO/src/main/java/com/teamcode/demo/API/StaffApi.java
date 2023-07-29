package com.teamcode.demo.API;

import com.teamcode.demo.entity.Staff;
import com.teamcode.demo.entity.UserInfo;
import com.teamcode.demo.repository.StaffRepository;
import com.teamcode.demo.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class StaffApi {

    List<Staff> list = new ArrayList<>();


    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private UserInfoRepository userInfoRepository;

    @RequestMapping(value = "/staff", method = RequestMethod.GET)
    public List<Staff> getAll() {
        userInfoRepository.findAll();
        list = staffRepository.findAll();
        return list;
    }


    @RequestMapping(value = "/staff", method = RequestMethod.POST)
    public Staff add(@RequestBody Staff staff) {
        UserInfo userInfo = userInfoRepository.save(staff.getUserInfo());
        System.out.println(userInfo);
        Staff nv = Staff.builder()
                .status(staff.getStatus())
                .userInfo(userInfo)
                .build();
        staffRepository.save(nv);
        System.out.println(nv);
        return nv;
    }

    @RequestMapping(value = "/staff/{id}", method = RequestMethod.DELETE)
    public void delete(@RequestBody Staff staff) {
        UserInfo userInfo= new UserInfo();
        userInfoRepository.deleteById(userInfo.getId());
        staffRepository.deleteById(staff.getId());
        System.out.println();
    }


}
