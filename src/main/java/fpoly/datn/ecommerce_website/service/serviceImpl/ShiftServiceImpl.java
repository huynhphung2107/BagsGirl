package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.CartDTO;
import fpoly.datn.ecommerce_website.dto.ShiftDTO;
import fpoly.datn.ecommerce_website.entity.Cart;
import fpoly.datn.ecommerce_website.entity.Customer;
import fpoly.datn.ecommerce_website.entity.Shift;
import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.repository.ICartRepository;
import fpoly.datn.ecommerce_website.repository.IShiftRepository;
import fpoly.datn.ecommerce_website.service.ShiftService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShiftServiceImpl implements ShiftService {

    @Autowired
    private IShiftRepository repo;


    @Override
    public List<Shift> findAll() {
        return this.repo.findAll();
    }

    @Override
    public Page<Shift> findAllPhanTrang(Integer page) {
        Pageable pageable = PageRequest.of(page,5);
        return repo.findAll(pageable);
    }


    @Override
    public Shift findById(String id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Shift save(ShiftDTO shiftDTO) {
        Shift shift = shiftDTO.validate(new Shift());
        return repo.save(shift);
    }

    @Override
    public Shift update(ShiftDTO shiftDTO, String id) {
        Shift x = shiftDTO.validate(repo.findById(id).orElse(null));
        x.setCode(shiftDTO.getCode());
        x.setCreateBy(shiftDTO.getCreateBy());
        x.setStartTime(shiftDTO.getStartTime());
        x.setNote(shiftDTO.getNote());
        x.setStatus(shiftDTO.getStatus());
        x.setEndTime(shiftDTO.getEndTime());
        x.setStaff(Staff.builder().id(shiftDTO.getStaff()).build());
        return repo.save(x);
    }


    @Override
    public List<Shift> searchByName(String name) {
        return null;
    }

    @Override
    public Boolean delete(String id) {
        Optional<Shift> optional = repo.findById(id);
        if(optional.isPresent()){
            Shift kh = optional.get();
            repo.delete(kh);
            return true;
        }else{
            return false;
        }
    }
}
