package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.entity.BaloDetail;
import fpoly.datn.ecommerce_website.repository.IBaloDetailRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BaloDetailServiceImpl implements ServiceGenarel<BaloDetail> {

    @Autowired
    private IBaloDetailRepository iBaloDetailRepository;

    public  List<BaloDetail> findAllByBalo(String baloID){
        return this.iBaloDetailRepository.findAllByBalo_Code(baloID);
    }

    @Override
    public List<BaloDetail> findAll() {
        return iBaloDetailRepository.findAll();
    }
    public  List<BaloDetail> findAllByBalo(String baloID){
        return this.iBaloDetailRepository.findAllByBalo_BaloCode(baloID);
    }
    @Override
    public BaloDetail findById(String id) {
        Optional<BaloDetail> optional = iBaloDetailRepository.findById(id);
        return optional.get();
    }

    @Override
    public BaloDetail save(BaloDetail entity) {
        return iBaloDetailRepository.save(entity);
    }

    @Override
    public BaloDetail update(BaloDetail entity) {
        return iBaloDetailRepository.save(entity);
    }

    @Override
    public String delete(String id) {
        iBaloDetailRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<BaloDetail> searchByName(String name) {
        return null;
    }
}
