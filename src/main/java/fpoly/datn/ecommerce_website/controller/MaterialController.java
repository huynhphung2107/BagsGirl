package fpoly.datn.ecommerce_website.controller;

import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.entity.Material;
import fpoly.datn.ecommerce_website.repository.IMaterialRepository;
import fpoly.datn.ecommerce_website.util.GenMaSanPham;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/material")
public class MaterialController {

    @Autowired
    private IMaterialRepository service;


    @GetMapping("/hienthi")
    public String hienThi(Model model) {

        return "/adminLayout/materials";

    }


    @PostMapping("/add")
    public String add(@RequestParam("code") String code, @RequestParam("name") String name) {
        Material material = new Material(null, code, name);
        service.save(material);
        System.out.println(service);
        return "redirect:/san-pham/hien-thi";
    }


    @PostMapping("/update/{id}")
    public String update(
            Model model, @PathVariable("id") String id
            ,@RequestParam("code") String code, @RequestParam("name") String name) {
        model.addAttribute("sp", service.getOne(id));
        Material material = new Material();
        material.setCode(code);
        material.setName(name);
        service.save(material);
        return "redirect:/san-pham/hien-thi";
    }

    @GetMapping("/remove/{id}")
    public String delete(@PathVariable("id") String id) {
        service.deleteById(id);
        return "redirect:/san-pham/hien-thi";

    }
}
