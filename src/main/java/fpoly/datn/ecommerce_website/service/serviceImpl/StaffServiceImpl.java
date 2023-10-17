package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.repository.IStaffRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

    public Page<Staff> findAllPage(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return staffRepository.findAll(pageable);
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

    public Staff updateStatus(String id,Integer status){
        Staff staff = staffRepository.findById(id).get();
        staff.setStaffStatus(status);
        return staffRepository.save(staff);
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
