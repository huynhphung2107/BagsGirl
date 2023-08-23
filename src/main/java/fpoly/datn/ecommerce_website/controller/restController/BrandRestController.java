package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BrandDTO;
import fpoly.datn.ecommerce_website.entity.Brand;
import fpoly.datn.ecommerce_website.service.serviceImpl.BrandServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RequestMapping("/api/manage")
@RestController
public class BrandRestController {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private BrandServiceImpl brandService;

    //GetAll
    @RequestMapping(value = "/brand/", method = RequestMethod.GET)
    public ResponseEntity<List<BrandDTO>> getAll() {
        return new ResponseEntity<>(
                this.brandService.findAll()
                        .stream()
                        .map(brand -> modelMapper.map(brand, BrandDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }

    //GetOne
    @RequestMapping(value = "/brand", method = RequestMethod.GET)
    public ResponseEntity<BrandDTO> getOne(@RequestParam String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.brandService.findById(id), BrandDTO.class)
                , HttpStatus.OK);
    }

    //Add
    @RequestMapping(value = "/brand", method = RequestMethod.POST)
    public ResponseEntity<Brand> save(@RequestBody BrandDTO brandDTO) {
        Brand brand = modelMapper.map(brandDTO, Brand.class);
        return new ResponseEntity<>(
                this.brandService.save(brand)
                , HttpStatus.OK);
    }

    //Update
    @RequestMapping(value = "/brand", method = RequestMethod.PUT)
    public ResponseEntity<Brand> update(@RequestBody BrandDTO brandDTO) {
        Brand brand = modelMapper.map(brandDTO, Brand.class);
        return new ResponseEntity<>(
                this.brandService.save(brand)
                , HttpStatus.OK);
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


