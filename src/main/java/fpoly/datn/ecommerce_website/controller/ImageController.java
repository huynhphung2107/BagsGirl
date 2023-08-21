package fpoly.datn.ecommerce_website.controller;

import fpoly.datn.ecommerce_website.entity.Image;
import fpoly.datn.ecommerce_website.repository.IImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/image")
public class ImageController {

    @Autowired
    private IImageRepository service;


    @GetMapping("/hienthi")
    public String hienThi(Model model) {

        return "/adminLayout/images";

    }


    @PostMapping("/add")
    public String add(@RequestParam("code") String code, @RequestParam("name") String name,
                      @RequestParam("urlImage") String urlImage) {
        Image image = new Image(null, code, name, urlImage);
        System.out.println(image);
        return "redirect:/san-pham/hien-thi";
    }


    @PostMapping("/update/{id}")
    public String update(
            Model model, @PathVariable("id") String id, @RequestParam("code") String code,
            @RequestParam("name") String name, @RequestParam("urlImage") String urlImage) {
        model.addAttribute("sp", service.getOne(id));
        Image image = new Image();
        image.setCode(code);
        image.setName(name);
        image.setUrlImage(urlImage);
        service.save(image);
        return "redirect:/san-pham/hien-thi";
    }

    @GetMapping("/remove/{id}")
    public String delete(@PathVariable("id") String id) {
        service.deleteById(id);
        return "redirect:/san-pham/hien-thi";

    }
}
