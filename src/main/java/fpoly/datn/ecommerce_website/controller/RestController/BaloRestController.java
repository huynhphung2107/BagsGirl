package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.repository.IBaloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RequestMapping("/dashboard")
@RestController
public class BaloRestController {

    @Autowired
    private IBaloRepository baloRepository;

    List<Balo> list = new ArrayList<>();

    //hienthi
    @RequestMapping(value = "/balo", method = RequestMethod.GET)
    public List<Balo> getAll() {
        list = baloRepository.findAll();
        return list;
    }

    //hien thi get one
    @RequestMapping(value = "/balo/{id}", method = RequestMethod.GET)
    public ResponseEntity<Balo> getOne(@PathVariable("id") String id) {
        Balo balo = baloRepository.findById(id).get();
        return new ResponseEntity<>(balo, HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/balo/{id}", method = RequestMethod.POST)
    public Balo add(@RequestBody Balo balo) {
        baloRepository.save(balo);
        return balo;
    }

    //update
    @RequestMapping(value = "/balo/{id}", method = RequestMethod.PUT)
    public void update(@RequestBody Balo balo) {
        baloRepository.save(balo);
    }

    //delete
    @RequestMapping(value = "/balo/{id}", method = RequestMethod.DELETE)
    public void remove(@PathVariable("id") String id) {
        baloRepository.deleteById(id);
    }




}
