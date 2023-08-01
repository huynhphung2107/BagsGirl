package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.CustomErrorType;
import fpoly.datn.ecommerce_website.entity.Material;
import fpoly.datn.ecommerce_website.entity.Staff;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import fpoly.datn.ecommerce_website.repository.IMaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@RestController
public class MaterialRestController {

    @Autowired
    private IMaterialRepository materialRepository;

    List<Material> lst = new ArrayList<>();

    //hien thi
    @RequestMapping(value = "/material", method = RequestMethod.GET)
    public List<Material> getAll(){
        lst = materialRepository.findAll();
        return lst;
    }

    // hien thi get one
    @RequestMapping(value = "/material/{id}", method = RequestMethod.GET)
    public ResponseEntity<Material> getOne(@PathVariable("id") String id){
        Material material = materialRepository.findById(id).get();
        return new ResponseEntity<>(material, HttpStatus.OK);
    }

    //add
//    @RequestMapping(value = "/material", method = RequestMethod.POST)
//    public Material add(@RequestBody Material material) {
//        materialRepository.save(material);
//        return material;
//    }
    @RequestMapping(value = "/material", method = RequestMethod.POST)
    public ResponseEntity<Material> add(@RequestBody Material materialParam) {
        Material nv = Material.builder()
                .code(materialParam.getCode())
                .name(materialParam.getName())
                .build();
        Material material = materialRepository.save(nv);
        System.out.println(nv);
        if (material == null){
            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(material, HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/material/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Material> update(@PathVariable String id,@RequestBody Material materialParam) {
        Material nv = Material.builder()
                .id(id)
                .code(materialParam.getCode())
                .name(materialParam.getName())
                .build();
        Material material = materialRepository.save(nv);
        System.out.println(nv);
        if (material == null){
            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(material, HttpStatus.OK);
    }

    //delete
//    @RequestMapping(value = "/material/{id}", method = RequestMethod.DELETE)
//    public void remove(@PathVariable("id") String id) {
//        materialRepository.deleteById(id);
//    }
    @RequestMapping(value = "/material/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable String id) {
        Material material  = materialRepository.findById(id).get();
        if (material == null){
            return new ResponseEntity<>( new CustomErrorType("Unable To Delete with id" + id + "not found"), HttpStatus.NOT_FOUND);
        }
        this.materialRepository.delete(material);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
