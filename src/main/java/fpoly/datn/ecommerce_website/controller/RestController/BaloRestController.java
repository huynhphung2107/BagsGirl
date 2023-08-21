package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.Balo;
import fpoly.datn.ecommerce_website.repository.IBaloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/manage")
@RestController
public class BaloRestController {

    @Autowired
    private IBaloRepository baloRepository;

    //hienthi
    @RequestMapping(value = "/balo/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        return new ResponseEntity<>(this.baloRepository.findAll(), HttpStatus.OK);
    }

    //hien thi get one
    @RequestMapping(value = "/balo", method = RequestMethod.GET)
    public ResponseEntity<?> getOne(@RequestParam("id") String id) {
        return new ResponseEntity<>(this.baloRepository.findById(id).get(), HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/balo", method = RequestMethod.POST)
    public ResponseEntity<?> add(@RequestBody Balo balo) {
        return new ResponseEntity<>(baloRepository.save(balo), HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/balo", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody Balo balo) {
        return new ResponseEntity<>(baloRepository.save(balo), HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/balo", method = RequestMethod.DELETE)
    public ResponseEntity<?> remove(@RequestParam("id") String id) {
        baloRepository.delete(baloRepository.findById(id).get());
        return new ResponseEntity<>("Delete Successfully!!!!!!", HttpStatus.NO_CONTENT);
    }


}
