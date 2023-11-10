package fpoly.datn.ecommerce_website.controller.client;

import fpoly.datn.ecommerce_website.dto.FullProductDTO;
import fpoly.datn.ecommerce_website.service.serviceImpl.Product_Image_ProductDetailsDTO_ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/manage")
public class FullProductController {
//    @Autowired
//    private Product_Image_ProductDetailsDTO_ServiceImpl productService;
//
//    @GetMapping("/all")
//    public ResponseEntity<List<Product_Image_ProductDetailsDTO>> getAllMappedData() {
//        List<Product_Image_ProductDetailsDTO> mappedData = productService.getAllMappedData();
//        return ResponseEntity.ok(mappedData);
//    }
@Autowired
private Product_Image_ProductDetailsDTO_ServiceImpl imageProductDetailService;

    @GetMapping("/image-product-detail")
    public ResponseEntity<List<FullProductDTO>> getAllMappedData() {
        List<FullProductDTO> mappedData = imageProductDetailService.getAllMappedData();
        return ResponseEntity.ok(mappedData);
    }
}
