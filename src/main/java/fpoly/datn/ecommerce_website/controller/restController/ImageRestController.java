package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.ImageDTO;
import fpoly.datn.ecommerce_website.service.IImagesService;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/api/manage")
@RestController
public class ImageRestController {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private IImagesService imageService;

    //GetAll
    @RequestMapping(value = "/image", method = RequestMethod.GET)
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(imageService.findAll());
    }

//    //GetOne
//    @RequestMapping(value = "/image", method = RequestMethod.GET)
//    public ResponseEntity<?> getOne(@RequestParam String id) {
//        if (imageService.findById(id) != null) {
//            return ResponseEntity.ok(imageService.findById(id));
//        } else {
//            return ResponseEntity.ok("Không tìm thấy ID !!!");
//        }
//    }

    //Add
    @RequestMapping(value = "/image", method = RequestMethod.POST)
    public ResponseEntity<?> add(@RequestBody @Valid ImageDTO imageDTO) {

        return new ResponseEntity<>(
                this.imageService.save(imageDTO)
                , HttpStatus.OK);
    }


    //update
//    @RequestMapping(value = "/image", method = RequestMethod.PUT)
//    public ResponseEntity<?> update(@RequestBody @Valid ImageDTO imageDTO, @RequestParam String id) {
//        if (imageService.findById(id) != null) {
//            Image image = modelMapper.map(imageDTO, Image.class);
//            return ResponseEntity.ok(imageService.update(image));
//        } else {
//            return ResponseEntity.ok("ID cần update không tồn tại, vui lòng kiểm tra lại ID !!");
//        }
//    }
//    @RequestMapping(value = "/image", method = RequestMethod.PUT)
//    public ResponseEntity<Images> update(@RequestBody @Valid ImageDTO imageDTO) {
//        Images image = modelMapper.map(imageDTO, Images.class);
//        return new ResponseEntity<>(
//                this.imageService.save(image)
//                , HttpStatus.OK);
//    }
//
//    //delete
//    @RequestMapping(value = "/image", method = RequestMethod.DELETE)
//    public ResponseEntity<?> delete(@RequestParam String id) {
//        return new ResponseEntity<>(this.imageService.delete(id), HttpStatus.OK);
//    }
}
