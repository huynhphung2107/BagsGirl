package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.BaloDTO;
import fpoly.datn.ecommerce_website.entity.Products;
import fpoly.datn.ecommerce_website.repository.IBaloRepository;
import fpoly.datn.ecommerce_website.service.IBaloService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BaloServiceImpl implements IBaloService {

    private final ModelMapper modelMapper;
    @Autowired
    private IBaloRepository iBaloRepository;

    public BaloServiceImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }



    public String GetBaloStatusString(int baloStatus) {
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
    public Page<BaloDTO> findAll(int pageNum, int PageSize) {
        PageRequest pageRequest = PageRequest.of(pageNum, PageSize);
        Page<Products> baloPage = this.iBaloRepository.getAllWithoutDelete(pageRequest);

        List<BaloDTO> baloDTOList = baloPage.getContent()
                .stream().map(balo -> modelMapper.map(balo, BaloDTO.class))
                .collect(Collectors.toList());
        return new PageImpl<>(baloDTOList, pageRequest, baloPage.getTotalElements());
    }


    @Override
    public Products findById(String id) {
        return this.iBaloRepository.findById(id).get();
    }

    @Override
    public Products save(Products entity) {
        return iBaloRepository.save(entity);
    }

    @Override
    public Products update(Products entity) {
        return iBaloRepository.save(entity);
    }
    @Override
    public Products updateBaloStatus(String baloID, int status) {
        Products balo = iBaloRepository.findById(baloID).orElse(null);
        balo.setProductStatus(status);
        return iBaloRepository.save(balo);
    }

    @Override
    public String delete(String id) {
        iBaloRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<Products> searchByName(String name) {
        return null;
    }
}
