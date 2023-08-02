package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.Brand;
import fpoly.datn.ecommerce_website.entity.CustomErrorType;
import fpoly.datn.ecommerce_website.repository.IBrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/admin/manage")
@RestController
public class BrandRestController {
    @Autowired
    private IBrandRepository iBrandRepository;

    //hien thi
    @RequestMapping(value = "/brand", method = RequestMethod.GET)
    public ResponseEntity<List<Brand>> getAll() {
        List<Brand> brands = iBrandRepository.findAll();
        if (brands.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Brand>>(brands, HttpStatus.OK);
    }

    // hien thi get one
    @RequestMapping(value = "/brand/{id}", method = RequestMethod.GET)
    public ResponseEntity<Brand> getOne(@PathVariable("id") String id){
        Brand brand = iBrandRepository.findById(id).get();
        return new ResponseEntity<>(brand, HttpStatus.OK);
    }

    @RequestMapping(value = "/brand", method = RequestMethod.POST)
    public ResponseEntity<Brand> add(@RequestBody Brand brandParam) {
        Brand nv = Brand.builder()
                .brandCode(brandParam.getBrandCode())
                .brandName(brandParam.getBrandName())
                .build();
        Brand brand = iBrandRepository.save(nv);
        System.out.println(nv);
        if (brand == null){
            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(brand, HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/brand/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Brand> update(@PathVariable String id,@RequestBody Brand brandParam) {
        Brand nv = Brand.builder()
                .id(id)
                .brandCode(brandParam.getBrandCode())
                .brandName(brandParam.getBrandName())
                .build();
        Brand brand = iBrandRepository.save(nv);
        System.out.println(nv);
        if (brand == null){
            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(brand, HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/brand/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable String id) {
        Brand brand  = iBrandRepository.findById(id).get();
        if (brand == null){
            return new ResponseEntity<>( new CustomErrorType("Unable To Delete with id" + id + "not found"), HttpStatus.NOT_FOUND);
        }
        this.iBrandRepository.delete(brand);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }




}





