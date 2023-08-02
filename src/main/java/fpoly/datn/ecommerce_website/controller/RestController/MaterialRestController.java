package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.CustomErrorType;
import fpoly.datn.ecommerce_website.entity.Material;
import fpoly.datn.ecommerce_website.repository.IMaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@RequestMapping("/admin/manage")
@RestController
public class MaterialRestController {

    @Autowired
    private IMaterialRepository materialRepository;

    List<Material> lst = new ArrayList<>();

    //hien thi
    @RequestMapping(value = "/material", method = RequestMethod.GET)
    public ResponseEntity<List<Material>> getAll() {
        List<Material> materials = materialRepository.findAll();
        if (materials.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Material>>(materials, HttpStatus.OK);
    }

    // hien thi get one
    @RequestMapping(value = "/material/{id}", method = RequestMethod.GET)
    public ResponseEntity<Material> getOne(@PathVariable("id") String id){
        Material material = materialRepository.findById(id).get();
        return new ResponseEntity<>(material, HttpStatus.OK);
    }
//    @GetMapping(value = "/material/{id}")
//    public Material getOne(@PathVariable("id") String id){
//        Material material = materialRepository.findById(id).get();
//        return material;
//    }

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
        System.out.println(nv.toString());
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
