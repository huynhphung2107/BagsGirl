package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.entity.Brand;
import fpoly.datn.ecommerce_website.repository.IBaloRepository;
import fpoly.datn.ecommerce_website.repository.IBrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.EntityResponse;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RequestMapping("/dashboard/brand")
@RestController
public class BrandRestController {
    @Autowired
    private IBrandRepository iBrandRepository;

    @GetMapping(value = "")
    public List<Brand> getAll() {
        return iBrandRepository.findAll();
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Brand> getOne(@PathVariable("id") UUID id) {
        Brand brand = iBrandRepository.findById(id).orElse(null);
        return new ResponseEntity<>(brand, HttpStatus.OK);
    }
    //update
    @PutMapping(value = "/{id}")
    public Brand update(@RequestBody Brand brand, @PathVariable("id") UUID id) {
        brand.setId(id);
       return  iBrandRepository.save(brand);
    }
    //update
    @PostMapping(value = "")
    public Brand add(@RequestBody Brand brand) {
        brand.setId(null);
        return iBrandRepository.save(brand);
    }

    //delete
    @DeleteMapping(value = "/{id}")
    public ResponseEntity remove(@PathVariable("id") UUID id)  {
        iBrandRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }




}





