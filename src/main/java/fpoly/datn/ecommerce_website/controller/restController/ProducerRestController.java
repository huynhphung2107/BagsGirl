package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.entity.CustomErrorType;
import fpoly.datn.ecommerce_website.entity.Producer;
import fpoly.datn.ecommerce_website.repository.IProducerReposiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/api/manage")
@RestController
public class ProducerRestController {
    @Autowired
    IProducerReposiory iProducerReposiory;

    List<Producer> lst = new ArrayList<>();

    //hienthi
    @RequestMapping(value = "/producer", method = RequestMethod.GET)
    public ResponseEntity<List<Producer>> getAll() {
        List<Producer> producers = iProducerReposiory.findAll();
        if (producers.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Producer>>(producers, HttpStatus.OK);
    }

    //hienThiGetOne
    @RequestMapping(value = "/producer/{id}", method = RequestMethod.GET)
    public ResponseEntity<Producer> getOne(@PathVariable("id") String id) {
        Producer producer = iProducerReposiory.findById(id).get();
        if (producer == null) {
            return new ResponseEntity(new CustomErrorType("User with id " + id
                    + " not found"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Producer>(producer, HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/producer", method = RequestMethod.POST)
    public ResponseEntity<Producer> add(@RequestBody Producer producerParam) {
        Producer nv = Producer.builder()
                .producerCode(producerParam.getProducerCode())
                .producerName(producerParam.getProducerName())
                .build();
        Producer producer = iProducerReposiory.save(nv);
        System.out.println(nv);
        if (producer == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(producer, HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/producer/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Producer> update(@PathVariable String id, @RequestBody Producer producerParam) {
        Producer nv = Producer.builder()
                .id(id)
                .producerCode(producerParam.getProducerCode())
                .producerName(producerParam.getProducerName())
                .build();
        Producer producer = iProducerReposiory.save(nv);
        System.out.println(nv);
        if (producer == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(producer, HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/producer/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable String id) {
        Producer producer = iProducerReposiory.findById(id).get();
        if (producer == null) {
            return new ResponseEntity<>(new CustomErrorType("Unable To Delete with id" + id + "not found"), HttpStatus.NOT_FOUND);
        }
        this.iProducerReposiory.delete(producer);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
