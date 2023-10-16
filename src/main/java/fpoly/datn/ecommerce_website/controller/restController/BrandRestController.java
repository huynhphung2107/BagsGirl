package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.BrandDTO;
import fpoly.datn.ecommerce_website.entity.Brand;
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
public class BrandRestController {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private BrandServiceImpl brandService;

    //GetAll
    @RequestMapping(value = "/brand/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "10") int pageSize
    ) {
        Page<Brand> brandPage = brandService.findAllPage(pageNum, pageSize);
        return new ResponseEntity<>
                (brandPage, HttpStatus.OK);
    }

    @RequestMapping(value = "/brand/get-all", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(
    ) {
        List<Brand> brandPage = brandService.findAll();
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
    public ResponseEntity<Brand> save(@Valid @RequestBody BrandDTO brandDTO) {
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

    @RequestMapping(value = "/brand/update-status", method = RequestMethod.PUT)
    public ResponseEntity<Brand> updateStatus(@Valid @RequestParam String id, @RequestParam int status) {
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

    @ResponseStatus(HttpStatus.BAD_REQUEST)

    @ExceptionHandler(MethodArgumentNotValidException.class)

    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach(error -> {
            String fieldName = ((FieldError) error).getField();
            String errorMesssage = error.getDefaultMessage();
            errors.put(fieldName, errorMesssage);
        });

        return errors;
    }

}




