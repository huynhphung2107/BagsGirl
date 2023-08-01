package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.Compartment;
import fpoly.datn.ecommerce_website.repository.ICompartmentRepository;
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
@RequestMapping("/admin/manage")
public class CompartmentRestController {

    @Autowired
    private ICompartmentRepository iCompartmentRepository;

    List<Compartment> list = new ArrayList<>();


    //hien thi
    @GetMapping("/compartment")
    public List<Compartment> getAll() {
        list = iCompartmentRepository.findAll();
        return list;
    }

    @GetMapping("/compartment/{id}")
    public Compartment getOne(@PathVariable("id") String id) {
        Compartment compartment = iCompartmentRepository.findById(id).get();
        return compartment;
    }

    //add
    @PostMapping("/compartment")
    public ResponseEntity<Compartment> add(@RequestBody Compartment compartment) {
        Compartment compartment1 = iCompartmentRepository.save(compartment);

        if (compartment1 == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }


    //update
    @PutMapping("/compartment")
    public ResponseEntity<Compartment> update(@RequestBody Compartment compartment) {
        Compartment compartment1 = iCompartmentRepository.save(compartment);

        if (compartment1 == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //delete
    @DeleteMapping("/compartment/{id}")
    public void delete(@PathVariable("id") String id) {
        iCompartmentRepository.deleteById(id);

    }
}
