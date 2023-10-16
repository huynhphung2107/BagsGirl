package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BaloDTO;
import fpoly.datn.ecommerce_website.dto.Balo_BrandDTO;
import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.entity.Brand;
import fpoly.datn.ecommerce_website.service.serviceImpl.BaloServiceImpl;
import fpoly.datn.ecommerce_website.service.serviceImpl.BrandServiceImpl;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RequestMapping("/api/manage")
@RestController
public class BaloRestController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private BaloServiceImpl baloService;
    @Autowired
    private BrandServiceImpl brandService;

    public BaloRestController(BaloServiceImpl baloService) {
        this.baloService = baloService;
    }

    //hienthi
    @RequestMapping(value = "/balo/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(
            @RequestParam(name = "page", defaultValue = "1") int pageNum,
            @RequestParam(name = "size", defaultValue = "10") int pageSize
    ) {
        Page<BaloDTO> baloPage = baloService.findAll(pageNum, pageSize);
        return new ResponseEntity<>
                (baloPage, HttpStatus.OK);
    }


    @RequestMapping(value = "/balo", method = RequestMethod.GET)
    public ResponseEntity<?> getOne(@RequestParam("id") String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.baloService.findById(id), BaloDTO.class)
                , HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/balo", method = RequestMethod.POST)
    public ResponseEntity<?> add(@Valid @RequestBody Balo_BrandDTO baloBrandDTO) {

        Brand brand = brandService.findById(baloBrandDTO.getBrandID());
        Balo balo = modelMapper.map(baloBrandDTO, Balo.class);
        balo.setBrand(brand);
        return new ResponseEntity<>(baloService.save(balo), HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/balo", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@Valid @RequestBody BaloDTO baloDTO) {
        return new ResponseEntity<>(baloService.save(
                modelMapper.map(baloDTO, Balo.class)

        ), HttpStatus.OK);
    }

    @RequestMapping(value = "/balo/update-status", method = RequestMethod.PUT)
    public ResponseEntity<?> updateStatus(@Valid @RequestParam String baloID, @RequestParam int status) {
        return new ResponseEntity<>(baloService.updateBaloStatus(
                baloID, status

        ), HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/balo", method = RequestMethod.DELETE)
    public ResponseEntity<?> remove(@RequestParam("id") String id) {
        baloService.delete(baloService.findById(id).getId());
        return new ResponseEntity<>("Delete Successfully!!!!!!", HttpStatus.NO_CONTENT);
    }


    //End
}
