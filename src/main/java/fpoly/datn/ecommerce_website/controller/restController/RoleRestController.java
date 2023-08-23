package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.entity.UserRole;
import fpoly.datn.ecommerce_website.repository.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/manage")
public class RoleRestController {

    List<UserRole> list = new ArrayList<>();
    @Autowired
    private IRoleRepository iRoleRepository;

    @GetMapping("/role")
    public List<UserRole> getAll() {
        list = iRoleRepository.findAll();
        return list;
    }
}
