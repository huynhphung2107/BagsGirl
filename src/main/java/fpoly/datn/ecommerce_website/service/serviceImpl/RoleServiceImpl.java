package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Roles;
import fpoly.datn.ecommerce_website.repository.IRoleRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServiceImpl implements ServiceGenarel<Roles> {

    @Autowired
    private IRoleRepository userRoleRepository;

    @Override
    public List<Roles> findAll() {
        return this.userRoleRepository.findAll();
    }

    @Override
    public Roles findById(String id) {
        return this.userRoleRepository.findById(id).get();
    }

    @Override
    public Roles save(Roles userRole) {
        return this.userRoleRepository.save(userRole);
    }

    @Override
    public Roles update(Roles userRole) {
        return this.userRoleRepository.save(userRole);
    }

    @Override
    public String delete(String id) {

        this.userRoleRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<Roles> searchByName(String name) {
        return null;
    }
}
