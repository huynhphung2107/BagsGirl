package fpoly.datn.ecommerce_website.controller.client;

import fpoly.datn.ecommerce_website.dto.FullProductDTO;
import fpoly.datn.ecommerce_website.service.serviceImpl.FullProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @GetMapping("/findProductByColor")
    public ResponseEntity<FullProductDTO> findProductByColor(
            @RequestParam(name = "id") String productId,
            @RequestParam(name = "colorId") String colorId
    ) {

        FullProductDTO product = productService.findProductByColor(productId, colorId);

        if (product != null) {


            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
