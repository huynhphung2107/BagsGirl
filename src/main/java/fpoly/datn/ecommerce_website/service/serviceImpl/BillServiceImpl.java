package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.BillAddDTO;
import fpoly.datn.ecommerce_website.dto.BillDTO;
import fpoly.datn.ecommerce_website.entity.Bill;
import fpoly.datn.ecommerce_website.entity.Bills;
import fpoly.datn.ecommerce_website.repository.IBillRepository;
import fpoly.datn.ecommerce_website.service.IBillService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BillServiceImpl implements IBillService {
    @Autowired
    private IBillRepository iBillRepository;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<BillDTO> findAllBill(){
        return this.iBillRepository.findAll().stream()
                .map(o -> modelMapper.map(o, BillDTO.class))
                .collect(Collectors.toList());
    }
    @Override
    public BillAddDTO save(BillAddDTO billAddDTO){
        return this.iBillRepository.save(modelMapper.map(billAddDTO, Bills.class));
    }
}
