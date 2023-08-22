package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.entity.CustomErrorType;
import fpoly.datn.ecommerce_website.entity.Image;
import fpoly.datn.ecommerce_website.repository.IImageRepository;
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
public class ImageRestController {

    @Autowired
    private IImageRepository iImageRepository;

    List<Image> lst = new ArrayList<>();

    //hienthi
    @RequestMapping(value = "/image", method = RequestMethod.GET)
    public ResponseEntity<List<Image>> getAll() {
        List<Image> images = iImageRepository.findAll();
        if (images.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Image>>(images, HttpStatus.OK);
    }

    //hienThiGetOne
    @RequestMapping(value = "/image/{id}", method = RequestMethod.GET)
    public ResponseEntity<Image> getOne(@PathVariable("id") String id) {
        Image image = iImageRepository.findById(id).get();
        if (image == null) {
            return new ResponseEntity(new CustomErrorType("User with id " + id
                    + " not found"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Image>(image, HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/image", method = RequestMethod.POST)
    public ResponseEntity<Image> add(@RequestBody Image imageParam) {
        Image nv = Image.builder()
                .code(imageParam.getCode())
                .name(imageParam.getName())
                .urlImage(imageParam.getUrlImage())
                .build();
        Image image = iImageRepository.save(nv);
        System.out.println(nv);
        if (image == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(image, HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/image/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Image> update(@PathVariable String id, @RequestBody Image imageParam) {
        Image nv = Image.builder()
                .id(id)
                .code(imageParam.getCode())
                .name(imageParam.getName())
                .urlImage(imageParam.getUrlImage())
                .build();
        Image image = iImageRepository.save(nv);
        System.out.println(nv);
        if (image == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(image, HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/image/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable String id) {
        Image image = iImageRepository.findById(id).get();
        if (image == null) {
            return new ResponseEntity<>(new CustomErrorType("Unable To Delete with id" + id + "not found"), HttpStatus.NOT_FOUND);
        }
        this.iImageRepository.delete(image);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
