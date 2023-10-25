package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BrandDTO;
import fpoly.datn.ecommerce_website.entity.Brands;
import fpoly.datn.ecommerce_website.service.serviceImpl.BrandServiceImpl;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/manage")
@RestController
public class BrandRestController {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private BrandServiceImpl brandService;

    //GetAllPage
    @RequestMapping(value = "/brand/panagition", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "10") int pageSize
    ) {
        Page<Brands> brandPage = brandService.findAllPage(pageNum, pageSize);
        return new ResponseEntity<>
                (brandPage, HttpStatus.OK);
    }

    @RequestMapping(value = "/brand/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(
    ) {
        List<Brands> brandPage = brandService.findAll();
        return new ResponseEntity<>
                (brandPage, HttpStatus.OK);
    }

    //GetOne
    @RequestMapping(value = "/brand", method = RequestMethod.GET)
    public ResponseEntity<BrandDTO> getOne(@Valid @RequestParam String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.brandService.findById(id), BrandDTO.class)
                , HttpStatus.OK);
    }

    //Add
    @RequestMapping(value = "/brand", method = RequestMethod.POST)
    public ResponseEntity<Brands> save(@Valid @RequestBody BrandDTO brandDTO) {
        Brands brand = modelMapper.map(brandDTO, Brands.class);
        return new ResponseEntity<>(
                this.brandService.save(brand)
                , HttpStatus.OK);
    }

    //Update
    @RequestMapping(value = "/brand", method = RequestMethod.PUT)
    public ResponseEntity<Brands> update(@RequestBody BrandDTO brandDTO) {
        Brands brand = modelMapper.map(brandDTO, Brands.class);
        return new ResponseEntity<>(
                this.brandService.save(brand)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/brand/update-status", method = RequestMethod.PUT)
    public ResponseEntity<Brands> updateStatus(@Valid @RequestParam String id, @RequestParam int status) {
        return new ResponseEntity<>(brandService.updateStatus(id, status),
                HttpStatus.OK);

    }


    //Delete
    @RequestMapping(value = "/brand", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        this.brandService.delete(id);
        return new ResponseEntity<>(
                "Delete Successfuly"
                , HttpStatus.OK);
    }


}




