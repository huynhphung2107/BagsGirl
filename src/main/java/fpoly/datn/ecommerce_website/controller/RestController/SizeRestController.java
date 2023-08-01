package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.Size;
import fpoly.datn.ecommerce_website.repository.ISizeReponsitory;
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
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RequestMapping("/admin/manage")
@RestController
public class SizeRestController {


        @Autowired
        private ISizeReponsitory iSizeReponsitory;

        @RequestMapping(value = "/size", method = RequestMethod.GET)
        public List<Size> getAll() {
            return iSizeReponsitory.findAll();
        }
        @RequestMapping(value = "/size/{id}", method = RequestMethod.GET)
        public ResponseEntity<Size> getOne(@PathVariable("id") UUID id) {
            Size size = iSizeReponsitory.findById(id).orElse(null);
            return new ResponseEntity<>(size, HttpStatus.OK);
        }
        //update
        @RequestMapping(value ="/size", method = RequestMethod.PUT)
        public Size update(@RequestBody Size size) {

            return  iSizeReponsitory.save(size);
        }
        //    addd
        @RequestMapping(value = "/size", method = RequestMethod.POST)
        public Size add(@RequestBody Size size) {

            return iSizeReponsitory.save(size);
        }

        //delete
        @DeleteMapping(value = "/{id}")
        public ResponseEntity remove(@PathVariable("id") UUID id)  {
            iSizeReponsitory.deleteById(id);
            return ResponseEntity.ok().build();
        }



}
