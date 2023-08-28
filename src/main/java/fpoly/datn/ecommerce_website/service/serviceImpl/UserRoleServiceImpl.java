package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.UserRole;
import fpoly.datn.ecommerce_website.repository.IUserRoleRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserRoleServiceImpl implements ServiceGenarel<UserRole> {

    @Autowired
    private IUserRoleRepository userRoleRepository;

    @Override
    public List<UserRole> findAll() {
        return this.userRoleRepository.findAll();
    }

    @Override
    public UserRole findById(String id) {
        return this.userRoleRepository.findById(id).get();
    }

    @Override
    public UserRole save(UserRole userRole) {
        return this.userRoleRepository.save(userRole);
    }

    @Override
    public UserRole update(UserRole userRole) {
        return this.userRoleRepository.save(userRole);
    }

    @Override
    public String delete(String id) {

        this.userRoleRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<UserRole> searchByName(String name) {
        return null;
    }
}
