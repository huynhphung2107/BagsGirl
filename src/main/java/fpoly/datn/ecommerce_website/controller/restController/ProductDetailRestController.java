package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.ProductDetailDTO;
import fpoly.datn.ecommerce_website.service.serviceImpl.ProductDetailServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/manage")
public class ProductDetailRestController {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ProductDetailServiceImpl productDetailService;

    @RequestMapping(value = "/product/{productId}/productdetails", method = RequestMethod.GET)
    public ResponseEntity<?> getAllbyproduct(@PathVariable String productID) {
        return new ResponseEntity<>(
                this.productDetailService.findAllByProduct(productID)
                        .stream()
                        .map(productDetail -> modelMapper.map(productDetail, ProductDetailDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK
        );

    }



    @RequestMapping(value = "/product-detail/search", method = RequestMethod.GET)
    public ResponseEntity<?> findByKeyword(@RequestParam String keyword) {
        return new ResponseEntity<>(
               this.productDetailService.findByKeyword(keyword) .stream()
                       .map(productDetail -> modelMapper.map(productDetail, ProductDetailDTO.class))
                       .collect(Collectors.toList())
                , HttpStatus.OK);
    }


}
