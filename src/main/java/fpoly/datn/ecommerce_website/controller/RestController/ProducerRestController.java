package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.Producer;
import fpoly.datn.ecommerce_website.repository.IProducerReposiory;
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

@RequestMapping("/dashboard/producer")
@RestController
public class ProducerRestController {
    @Autowired
    IProducerReposiory  iProducerReposiory;


    @GetMapping(value = "")
    public List<Producer> getAll() {
        return iProducerReposiory.findAll();
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<Producer> getOne(@PathVariable("id") UUID id) {
        Producer producer = iProducerReposiory.findById(id).orElse(null);
        return new ResponseEntity<>(producer, HttpStatus.OK);
    }
//
//    update
    @PutMapping(value = "")
    public Producer update(@RequestBody Producer producer) {
        return iProducerReposiory.save(producer);
    }
//   add
    @PostMapping(value = "")
    public Producer add(@RequestBody Producer producer) {
        producer.setId(null);
        return iProducerReposiory.save(producer);
    }

    //delete
    @DeleteMapping(value = "/{id}")
    public ResponseEntity remove(@PathVariable("id") UUID id)  {
        iProducerReposiory.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
