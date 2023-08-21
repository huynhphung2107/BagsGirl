package fpoly.datn.ecommerce_website.controller.RestController;

import fpoly.datn.ecommerce_website.entity.CustomErrorType;
import fpoly.datn.ecommerce_website.entity.Image;
import fpoly.datn.ecommerce_website.repository.IImageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
=======
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
>>>>>>> main

import java.util.ArrayList;
import java.util.List;


@RequestMapping("/api/manage")
@RestController
public class ImageRestController {

    public static final Logger logger = LoggerFactory.getLogger(ImageRestController.class);

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
<<<<<<< HEAD
    public ResponseEntity<?> getOne(@PathVariable("id") String id){
        logger.info("Fetching Image with id {}", id);
        Image image = iImageRepository.findById(id).orElse(null);
=======
    public ResponseEntity<Image> getOne(@PathVariable("id") String id) {
        Image image = iImageRepository.findById(id).get();
>>>>>>> main
        if (image == null) {
            logger.error("Image with id {} not found.", id);
            return new ResponseEntity(new CustomErrorType("Image with id " + id
                    + " not found"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Image>(image, HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/image", method = RequestMethod.POST)
    public ResponseEntity<Image> add(@RequestBody Image imageParam, UriComponentsBuilder ucBuilder) {
        logger.info("Creating Image : {}", imageParam);
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
<<<<<<< HEAD
    public ResponseEntity<Image> update(@PathVariable String id,@RequestBody Image imageParam) {
        logger.info("Updating Image with id {}", id);

        Image x = iImageRepository.findById(id).orElse(null);

        if (x == null) {
            logger.error("Unable to update Image with id {} not found.", id);
            return new ResponseEntity(new CustomErrorType("Unable to update Image with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
=======
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
>>>>>>> main
        }

        x.setName(imageParam.getName());
        x.setCode(imageParam.getCode());
        x.setUrlImage(imageParam.getUrlImage());

        Image image = iImageRepository.save(x);
        System.out.println(x);
        return new ResponseEntity<Image>(image, HttpStatus.OK);
//        Image nv = Image.builder()
//                .id(id)
//                .code(imageParam.getCode())
//                .name(imageParam.getName())
//                .urlImage(imageParam.getUrlImage())
//                .build();
//        Image image = iImageRepository.save(nv);
//        System.out.println(nv);
//        if (image == null){
//            return new ResponseEntity<>( HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<>(image, HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/image/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@PathVariable String id) {
<<<<<<< HEAD
        logger.info("Fetching & Deleting Image with id {}", id);

        Image image = iImageRepository.findById(id).orElse(null);
        if (image == null) {
            logger.error("Unable to delete. Image with id {} not found.", id);
            return new ResponseEntity(new CustomErrorType("Unable to delete Image with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
=======
        Image image = iImageRepository.findById(id).get();
        if (image == null) {
            return new ResponseEntity<>(new CustomErrorType("Unable To Delete with id" + id + "not found"), HttpStatus.NOT_FOUND);
>>>>>>> main
        }
        iImageRepository.deleteById(id);
        return new ResponseEntity<Image>(HttpStatus.NO_CONTENT);
//        Image image  = iImageRepository.findById(id).get();
//        if (image == null){
//            return new ResponseEntity<>( new CustomErrorType("Unable To Delete with id" + id + "not found"), HttpStatus.NOT_FOUND);
//        }
//        this.iImageRepository.delete(image);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
