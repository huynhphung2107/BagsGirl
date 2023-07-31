package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.CustomErrorType;
import fpoly.datn.ecommerce_website.entity.Image;
import fpoly.datn.ecommerce_website.entity.Material;
import fpoly.datn.ecommerce_website.repository.IImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ImageRestController {

    @Autowired
    private IImageRepository iImageRepository;

    List<Image> lst = new ArrayList<>();

    //hienthi
    @RequestMapping(value = "/image", method = RequestMethod.GET)
    public List<Image> getAll(){
        return iImageRepository.findAll();
    }

    //hienThiGetOne
    @RequestMapping(value = "/image/{id}", method = RequestMethod.GET)
    public ResponseEntity<Image> getOne(@PathVariable("id") String id){
        Image image = iImageRepository.findById(id).get();
        return new ResponseEntity<>(image, HttpStatus.OK);
    }

    @RequestMapping(value = "/image", method = RequestMethod.POST)
    public ResponseEntity<Image> add(@RequestBody Image imageParam) {
        Image nv = Image.builder()
                .code(imageParam.getCode())
                .name(imageParam.getName())
                .urlImage(imageParam.getUrlImage())
                .build();
        Image image = iImageRepository.save(nv);
        System.out.println(nv);
        if (image == null){
            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(image, HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/image/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Image> update(@PathVariable String id,@RequestBody Image imageParam) {
        Image nv = Image.builder()
                .id(id)
                .code(imageParam.getCode())
                .name(imageParam.getName())
                .urlImage(imageParam.getUrlImage())
                .build();
        Image image = iImageRepository.save(nv);
        System.out.println(nv);
        if (image == null){
            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(image, HttpStatus.OK);
    }

    //delete
//    @RequestMapping(value = "/material/{id}", method = RequestMethod.DELETE)
//    public void remove(@PathVariable("id") String id) {
//        materialRepository.deleteById(id);
//    }
    @RequestMapping(value = "/image/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable String id) {
        Image image  = iImageRepository.findById(id).get();
        if (image == null){
            return new ResponseEntity<>( new CustomErrorType("Unable To Delete with id" + id + "not found"), HttpStatus.NOT_FOUND);
        }
        this.iImageRepository.delete(image);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
