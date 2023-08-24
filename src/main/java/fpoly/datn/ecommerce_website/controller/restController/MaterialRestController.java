package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.MaterialDTO;
import fpoly.datn.ecommerce_website.entity.Material;
import fpoly.datn.ecommerce_website.service.serviceImpl.MaterialServiceImpl;
import org.modelmapper.ModelMapper;
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
public class MaterialRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private MaterialServiceImpl materialService;

    //GetAll
    @RequestMapping(value = "/material/", method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(materialService.findAll());
    }

    //GetOne
    @RequestMapping(value = "/material", method = RequestMethod.GET)
    public ResponseEntity<?> getOne(@RequestParam String id) {
        if(materialService.findById(id) != null){
            return ResponseEntity.ok(materialService.findById(id));

        }else{
            return ResponseEntity.ok("Không tìm thấy ID !!!");
        }
    }

    //Add
    @RequestMapping(value = "/material", method = RequestMethod.POST)
    public ResponseEntity<Material> add(@RequestBody MaterialDTO materialDTO) {
        Material material = modelMapper.map(materialDTO, Material.class);
        return new ResponseEntity<>(
                this.materialService.save(material)
                , HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/material", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@RequestBody MaterialDTO materialDTO, @RequestParam String id) {
        if(materialService.findById(id) != null){
            Material material = modelMapper.map(materialDTO, Material.class);
            return ResponseEntity.ok(materialService.update(material,id));

        }else{
            return ResponseEntity.ok("ID cần update không tồn tại, vui lòng kiểm tra lại ID !!");
        }

    }

    //delete
    @RequestMapping(value = "/material", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        if(materialService.delete(id)){
            return ResponseEntity.ok("Xóa thành công!!");
        }else{
            return ResponseEntity.ok("id không tồn tại để xóa!!");
        }
    }

}
