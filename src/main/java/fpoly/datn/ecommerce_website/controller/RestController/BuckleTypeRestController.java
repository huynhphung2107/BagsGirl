package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.BuckleType;
import fpoly.datn.ecommerce_website.repository.IBuckleTypeRepository;
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

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/manage")
public class BuckleTypeRestController {

    @Autowired
    private IBuckleTypeRepository iBuckleTypeRepository;

    List<BuckleType> list = new ArrayList<>();


    //hien thi
    @GetMapping("/buckle")
    public ResponseEntity<List<BuckleType>> getAll() {
        list = iBuckleTypeRepository.findAll();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/buckle/{id}")
    public ResponseEntity<BuckleType> getOne(@PathVariable("id") String id) {
        BuckleType buckleType = iBuckleTypeRepository.findById(id).get();
        return new ResponseEntity<>(buckleType, HttpStatus.OK);
    }

    //add
    @PostMapping("/buckle")
    public ResponseEntity<BuckleType> add(@RequestBody BuckleType BuckleType) {
        BuckleType buckleType = iBuckleTypeRepository.save(BuckleType);

        if (buckleType == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }


    //update
    @PutMapping("/buckle")
    public ResponseEntity<BuckleType> update(@RequestBody BuckleType BuckleType) {
        BuckleType buckleType = iBuckleTypeRepository.save(BuckleType);

        if (buckleType == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //delete
    @DeleteMapping("/buckle/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String id) {
        iBuckleTypeRepository.delete(iBuckleTypeRepository.findById(id).get());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
