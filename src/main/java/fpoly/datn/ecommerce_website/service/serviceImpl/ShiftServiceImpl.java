package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.ShiftDTO;
import fpoly.datn.ecommerce_website.entity.Shift;
import fpoly.datn.ecommerce_website.entity.Staff;
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

        return null;
    }

    @Override
    public Shift update(ShiftDTO shiftDTO, String id) {
        return null;
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
