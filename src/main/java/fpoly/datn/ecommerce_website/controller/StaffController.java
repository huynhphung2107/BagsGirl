package fpoly.datn.ecommerce_website.controller;

import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.repository.IStaffRepository;
import fpoly.datn.ecommerce_website.repository.IUserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/staff")
public class StaffController {

    @Autowired
    private IStaffRepository iStaffRepository;

    @Autowired
    private IUserInfoRepository iUserInfoRepository;

    @GetMapping("/hienthi")
    public String hienThi(Model model) {
        return "/adminLayout/staffs";
    }


    @PostMapping("/add")
    public String add(@RequestParam("name") String name, @RequestParam("status") String status) {
        Staff Staff = new Staff();
        iStaffRepository.save(Staff);
        System.out.println(iStaffRepository);
        return "redirect:/san-pham/hien-thi";
    }


    @PostMapping("/update/{id}")
    public String update(
            Model model, @PathVariable("id") String id
            , @RequestParam("name") String name, @RequestParam("status") String status) {
        model.addAttribute("sp", iStaffRepository.getOne(id));
//        Staff Staff = new Staff(null, GenMaSanPham.generateMaTuDong(), name, status);
        Staff Staff = new Staff();
//        Staff.setName(name);
//        Staff.setStatus(status);
//        iStaffRepository.save(Staff);
//        System.out.println(service);
        return "redirect:/san-pham/hien-thi";
    }

    @GetMapping("/remove/{id}")
    public String delete(@PathVariable("id") String id) {
        iStaffRepository.deleteById(id);
        return "redirect:/san-pham/hien-thi";

    }
}
