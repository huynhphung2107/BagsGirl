package fpoly.datn.ecommerce_website.controller;

import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.repository.IBaloRepository;
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
@RequestMapping("/sanpham")
public class BaloController {

    @Autowired
    private IBaloRepository service;


    @GetMapping("/hienthi")
    public String hienThi(Model model) {

        model.addAttribute("listSp", service.findAll());

        return "/client/admin/sanphams";
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
