package fpoly.datn.ecommerce_website.controller.client;

import fpoly.datn.ecommerce_website.dto.FullProductDTO;
import fpoly.datn.ecommerce_website.service.serviceImpl.FullProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/manage")
public class FullProductController {
    @Autowired
    private FullProductServiceImpl productService;

    @GetMapping("/all-products/")
    public ResponseEntity<List<FullProductDTO>> getAllFullProducts() {
        List<FullProductDTO> fullProducts = productService.getAllFullProducts();
        return ResponseEntity.ok(fullProducts);
    }

    @GetMapping("/detail-product/{id}")
    public ResponseEntity<?> chiTietSanPham(@PathVariable String id) {
        FullProductDTO productDetail = productService.findById(id);

        if (productDetail != null) {
            return ResponseEntity.ok(productDetail);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    @GetMapping("/getOne")
//    public ResponseEntity<?> chiTietSanPham(@RequestParam String id) {
//        List<Object[]> productDetails = productRepository.getProductDetailsById(id);
//
//        if (!productDetails.isEmpty()) {
//            return ResponseEntity.ok(productDetails);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }
}
