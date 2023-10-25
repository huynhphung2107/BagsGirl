package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.ShiftDTO;
import fpoly.datn.ecommerce_website.entity.Shifts;
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
    public List<Shifts> findAll() {
        return this.repo.findAll();
    }

    @Override
    public Page<Shifts> findAllPhanTrang(Integer page) {
        Pageable pageable = PageRequest.of(page,5);
        return repo.findAll(pageable);
    }


    @Override
    public Shifts findById(String id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public Shifts save(ShiftDTO shiftDTO) {

        return null;
    }

    @Override
    public Shifts update(ShiftDTO shiftDTO, String id) {
        return null;
    }


    @Override
    public List<Shifts> searchByName(String name) {
        return null;
    }

    @Override
    public Boolean delete(String id) {
        Optional<Shifts> optional = repo.findById(id);
        if(optional.isPresent()){
            Shifts kh = optional.get();
            repo.delete(kh);
            return true;
        }else{
            return false;
        }
    }
}
