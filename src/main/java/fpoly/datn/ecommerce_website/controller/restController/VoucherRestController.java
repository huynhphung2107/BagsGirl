package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.VoucherDTO;
import fpoly.datn.ecommerce_website.entity.Voucher;
import fpoly.datn.ecommerce_website.service.VoucherService;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/api/manage")
public class VoucherRestController {

    @Autowired
    private VoucherService voucherService;

    @Autowired
    private ModelMapper modelMapper;

    //GetAllPage
    @RequestMapping(value = "/voucher/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "10") int pageSize
    ) {
        Page<Voucher> voucherPage = voucherService.findAllPage(pageNum, pageSize);
        return new ResponseEntity<>
                (voucherPage, HttpStatus.OK);
    }

    //GetAllList
//    @RequestMapping(value = "/voucher", method = RequestMethod.GET)
//    public ResponseEntity<List<VoucherDTO>> getAll() {
//        return new ResponseEntity<>(
//                this.voucherService.fillAll()
//                        .stream()
//                        .map(voucher -> modelMapper.map(voucher, VoucherDTO.class))
//                        .collect(Collectors.toList())
//                , HttpStatus.OK);
//    }


    //getOne
    
    
    //add
    @RequestMapping(value = "/voucher", method = RequestMethod.POST)
    public ResponseEntity<Voucher> save(@Valid @RequestBody VoucherDTO voucherDTO) {
        Voucher voucher = modelMapper.map(voucherDTO, Voucher.class);
        return new ResponseEntity<>(
                this.voucherService.add(voucher)
                , HttpStatus.OK);
    }


    //update
    
    
    //update status
    @RequestMapping(value = "/voucher/update-status", method = RequestMethod.PUT)
    public ResponseEntity<Voucher> updateStatus(@Valid @RequestParam String id, @RequestParam int status) {
        return new ResponseEntity<>(voucherService.updateStatus(id, status),
                HttpStatus.OK);

    }

}
