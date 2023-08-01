package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.Brand;
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
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RequestMapping("/admin/manage")
@RestController
public class BrandRestController {
    @Autowired
    private IBrandRepository iBrandRepository;

    @GetMapping(value = "/brand")
    public List<Brand> getAll() {
        return iBrandRepository.findAll();
    }

    @GetMapping(value = "/brand/{id}")
    public ResponseEntity<Brand> getOne(@PathVariable("id") UUID id) {
        Brand brand = iBrandRepository.findById(id).orElse(null);
        return new ResponseEntity<>(brand, HttpStatus.OK);
    }
    //update
    @PutMapping(value ="/brand")
    public Brand update(@RequestBody Brand brand) {

       return  iBrandRepository.save(brand);
    }
//    addd
    @PostMapping(value = "/brand")
    public Brand add(@RequestBody Brand brand) {
        brand.setId(null);
        return iBrandRepository.save(brand);
    }

    //delete
    @DeleteMapping(value = "/brand/{id}")
    public ResponseEntity remove(@PathVariable("id") UUID id)  {
        iBrandRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }




}





