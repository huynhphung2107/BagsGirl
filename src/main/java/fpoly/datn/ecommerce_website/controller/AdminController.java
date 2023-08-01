package fpoly.datn.ecommerce_website.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@RequestMapping("/admin")
public class AdminController {
    @GetMapping("/admin")
    public String adminController(){

        return "/adminLayout/trangAdmin";
    }

    @GetMapping("/login")
    public String loginController(){

        return "/client/login";
    }
}
