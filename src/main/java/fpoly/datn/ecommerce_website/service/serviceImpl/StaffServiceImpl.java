package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.repository.IStaffRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffServiceImpl implements ServiceGenarel<Staff> {

    @Autowired
    private IStaffRepository staffRepository;

    @Override
    public List<Staff> findAll() {
        return this.staffRepository.findAll();
    }

    @Override
    public Staff findById(String id) {
        return this.staffRepository.findById(id).get();
    }

    @Override
    public Staff save(Staff staff) {
        return this.staffRepository.save(staff);
    }

    @Override
    public Staff update(Staff staff) {
        return this.staffRepository.save(staff);
    }

    @Override
    public String delete(String id) {

        this.staffRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<Staff> searchByName(String name) {
        return null;
    }
}
