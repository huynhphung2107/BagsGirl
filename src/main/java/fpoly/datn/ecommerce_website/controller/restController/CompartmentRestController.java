package fpoly.datn.ecommerce_website.controller.restController;

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
@RequestMapping("/api/manage")
public class CompartmentRestController {

    List<Compartment> list = new ArrayList<>();
    @Autowired
    private ICompartmentRepository iCompartmentRepository;

    //hien thi
    @GetMapping("/compartment")
    public ResponseEntity<List<Compartment>> getAll() {
        return new ResponseEntity<>(iCompartmentRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/compartment/{id}")
    public ResponseEntity<Compartment> getOne(@PathVariable("id") String id) {
        Compartment compartment = iCompartmentRepository.findById(id).get();
        return new ResponseEntity<>(compartment, HttpStatus.OK);
    }

    //add
    @PostMapping("/compartment")
    public ResponseEntity<Compartment> add(@RequestBody Compartment compartmentParam) {
        Compartment compartment = iCompartmentRepository.save(compartmentParam);

        if (compartment == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(compartment, HttpStatus.OK);
    }


    //update
    @PutMapping("/compartment")
    public ResponseEntity<Compartment> update(@RequestBody Compartment compartmentParam) {
        Compartment compartment = iCompartmentRepository.save(compartmentParam);

        if (compartment == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(compartment, HttpStatus.OK);
    }

    //delete
    @DeleteMapping("/compartment/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String id) {
        iCompartmentRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
