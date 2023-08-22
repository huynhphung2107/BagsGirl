package fpoly.datn.ecommerce_website.controller.restController;


import fpoly.datn.ecommerce_website.entity.Color;
import fpoly.datn.ecommerce_website.repository.IColorReponsitory;
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

@RequestMapping("/api/manage")
@RestController
public class ColorRestController {


    @Autowired
    private IColorReponsitory iColorReponsitory;

    @GetMapping(value = "/color")
    public ResponseEntity<List<Color>> getAll() {
        return new ResponseEntity<>(iColorReponsitory.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/color/{id}")
    public ResponseEntity<Color> getOne(@PathVariable("id") UUID id) {
        Color color = iColorReponsitory.findById(id).orElse(null);
        return new ResponseEntity<>(color, HttpStatus.OK);
    }

    //update
    @PutMapping(value = "/color")
    public ResponseEntity<Color> update(@RequestBody Color color) {

        return new ResponseEntity<>(iColorReponsitory.save(color), HttpStatus.OK);
    }

    //    addd
    @PostMapping(value = "/color")
    public ResponseEntity<Color> add(@RequestBody Color color) {
        return new ResponseEntity<>(iColorReponsitory.save(color), HttpStatus.OK);
    }

    //delete
    @DeleteMapping(value = "/color/{id}")
    public ResponseEntity<?> remove(@PathVariable("id") UUID id) {
        iColorReponsitory.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
