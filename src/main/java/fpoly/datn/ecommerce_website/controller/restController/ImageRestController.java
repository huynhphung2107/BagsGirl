package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.ImageDTO;
import fpoly.datn.ecommerce_website.entity.Images;
import fpoly.datn.ecommerce_website.entity.ProductDetails;
import fpoly.datn.ecommerce_website.service.IImagesService;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.Date;


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
        String filePath = imageDTO.getImgUrl();
        String addPath = "";
        try {
            // Lưu file vào thư mục images trong dự án
            String destinationDirectory = "fashion_bags_commerce/public/images/";
            Path sourcePath = Paths.get(filePath);
            // Tạo định dạng thời gian cho tên file
            SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss");
            String dateString = formatter.format(new Date());

            String fileName = dateString + "-" + new File(filePath).getName();
            Path destinationPath = Paths.get(destinationDirectory + fileName);
            Path path = Files.copy(sourcePath, destinationPath);

            String destinationFilePath = destinationDirectory + fileName;
            addPath = "/public/images/" + fileName;
            System.out.println(addPath + "đây là");
        } catch (IOException e) {
            e.printStackTrace();

        }

        imageDTO.setImgUrl(addPath);
        return new ResponseEntity<>(
                this.imageService.save(imageDTO)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/image/upload", method = RequestMethod.POST)
    public ResponseEntity<?> upload(@RequestBody MultipartFile file, @RequestParam String imageCode) {
        try {
            // Lưu trữ file vào thư mục tạm trên server
            String uploadDir = "./uploads"; // Thay đổi đường dẫn tùy theo cấu hình của bạn
            String fileName = file.getOriginalFilename();
            String filePath = Paths.get(uploadDir, fileName).toString();
            Path targetLocation = new File(filePath).toPath();
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            ProductDetails productDetails = new ProductDetails();
            productDetails.setProductDetailId("E0A7DCE5-71E2-420E-9593-00251B7E6678");
            Images images = Images.builder()
                    .productDetail(productDetails)
                    .imgName(fileName)
                    .imgCode(imageCode)
                    .imgUrl(filePath)
                    .isPrimary(true)
                    .build();

            ImageDTO imageDTO = this.imageService.save(modelMapper.map(images, ImageDTO.class));
            System.out.println("Đay là:" + imageDTO.toString());
            return new ResponseEntity<>(imageDTO, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
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
