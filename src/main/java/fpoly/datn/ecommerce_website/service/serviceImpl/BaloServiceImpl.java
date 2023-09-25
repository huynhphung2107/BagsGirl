package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.BaloDTO;
import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.repository.IBaloRepository;
import fpoly.datn.ecommerce_website.service.ServiceGenarel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BaloServiceImpl implements ServiceGenarel<Balo> {

    private final ModelMapper modelMapper;
    @Autowired
    private IBaloRepository iBaloRepository;

    public BaloServiceImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public BaloDTO mapBaloToBaloDTO(Balo balo) {
        BaloDTO baloDTO = modelMapper.map(balo, BaloDTO.class);
        baloDTO.setBaloStatusString(GetBaloStatusString(balo.getBaloStatus()));
        return baloDTO;
    }

    private String GetBaloStatusString(int baloStatus) {
        switch (baloStatus) {
            case 1:
                return "Đang Hoạt Động";
            case 0:
                return "Dừng Hoạt Động";
            case -1:
                return "Hủy Hoạt Động";
            default:
                return "Not Valid";
        }
    }

    @Override
    public List<Balo> findAll() {
        List<Balo> baloList = this.iBaloRepository.getAllWithoutDelete();

        return baloList;
    }


    @Override
    public Balo findById(String id) {
        return this.iBaloRepository.findById(id).get();
    }

    @Override
    public Balo save(Balo entity) {
        return iBaloRepository.save(entity);
    }

    @Override
    public Balo update(Balo entity) {
        return iBaloRepository.save(entity);
    }
    public Balo updateBaloStatus(String baloID, int status) {
        Balo balo = iBaloRepository.findById(baloID).orElse(null);
        balo.setBaloStatus(status);
        return iBaloRepository.save(balo);
    }

    @Override
    public String delete(String id) {
        iBaloRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<Balo> searchByName(String name) {
        return null;
    }
}
