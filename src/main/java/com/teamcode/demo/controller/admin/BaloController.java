package com.teamcode.demo.controller.admin;

import com.teamcode.demo.entity.Balo;
import com.teamcode.demo.genCode.GenMaSanPham;
import com.teamcode.demo.repository.BaloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/sanpham")
public class BaloController {

    @Autowired
    private BaloRepository service;


    @GetMapping("/hienthi")
    public String hienThi(Model model) {

        model.addAttribute("listSp", service.findAll());

        return "/sanpham/sanphams";
    }


    @PostMapping("/add")
    public String add(@RequestParam("name") String name, @RequestParam("status") String status) {
        Balo balo = new Balo(null, GenMaSanPham.generateMaTuDong(), name, status);
        service.save(balo);
        System.out.println(service);
        return "redirect:/san-pham/hien-thi";
    }


    @PostMapping("/update/{id}")
    public String update(
            Model model, @PathVariable("id") String id
            , @RequestParam("name") String name, @RequestParam("status") String status) {
        model.addAttribute("sp", service.getOne(id));
//        Balo balo = new Balo(null, GenMaSanPham.generateMaTuDong(), name, status);
        Balo balo = new Balo();
        balo.setName(name);
        balo.setStatus(status);
        service.save(balo);
//        System.out.println(service);
        return "redirect:/san-pham/hien-thi";
    }

    @GetMapping("/remove/{id}")
    public String delete(@PathVariable("id") String id) {
        service.deleteById(id);
        return "redirect:/san-pham/hien-thi";

    }
}
