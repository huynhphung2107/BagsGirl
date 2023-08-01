package fpoly.datn.ecommerce_website.controller.RestController;


import fpoly.datn.ecommerce_website.entity.Color;
import fpoly.datn.ecommerce_website.entity.Size;
import fpoly.datn.ecommerce_website.repository.IColorReponsitory;
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
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RequestMapping("/admin/manage")
    @RestController
    public class ColorRestController {


        @Autowired
        private IColorReponsitory iColorReponsitory;

        @GetMapping(value = "/color")
    public List<Color> getAll() {
        return iColorReponsitory.findAll();
    }

    @GetMapping(value = "/color/{id}")
    public ResponseEntity<Color> getOne(@PathVariable("id") UUID id) {
        Color color = iColorReponsitory.findById(id).orElse(null);
        return new ResponseEntity<>(color, HttpStatus.OK);
    }
    //update
    @PutMapping(value ="/color")
    public Color update(@RequestBody Color color) {

        return  iColorReponsitory.save(color);
    }
    //    addd
    @PostMapping(value = "/color")
    public Color add(@RequestBody Color color) {
        color.setId(null);
        return iColorReponsitory.save(color);
    }

    //delete
    @DeleteMapping(value = "/color/{id}")
    public ResponseEntity remove(@PathVariable("id") UUID id)  {
        iColorReponsitory.deleteById(id);
        return ResponseEntity.ok().build();
    }



}
