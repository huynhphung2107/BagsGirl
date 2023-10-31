package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.ProductDetailDTO;
import fpoly.datn.ecommerce_website.dto.Product_ProductDetailDTO;
import fpoly.datn.ecommerce_website.entity.ProductDetails;
import fpoly.datn.ecommerce_website.service.serviceImpl.ProductDetailServiceImpl;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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

    //getOne
    @RequestMapping(value = "/product-details/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getOne(@PathVariable String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.productDetailService.findById(id), ProductDetailDTO.class)
                , HttpStatus.OK);
    }

    @RequestMapping(value = "/product-details", method = RequestMethod.GET)
    public ResponseEntity<?> findAll() {

        return new ResponseEntity<>(
                this.productDetailService.findAll().stream()
                        .map(p -> modelMapper.map(p, ProductDetailDTO.class)).toList()
                , HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/product-details", method = RequestMethod.POST)
    public ResponseEntity<?> save(@Valid @RequestBody Product_ProductDetailDTO productProductDetailDTO) {
        System.out.println(productProductDetailDTO);
        return new ResponseEntity<>(
                productDetailService.save(modelMapper.map(productProductDetailDTO, ProductDetails.class))
                , HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/product-details", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@Valid @RequestBody Product_ProductDetailDTO balo_baloDetailDTO) {
        return new ResponseEntity<>(
                productDetailService.save(modelMapper.map(balo_baloDetailDTO, ProductDetails.class))
                , HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/product-detail", method = RequestMethod.DELETE)
    public ResponseEntity<?> delete(@RequestParam String id) {
        productDetailService.delete(id);
        return new ResponseEntity<>("Delete successfully!", HttpStatus.OK);
    }

    @RequestMapping(value = "product-detail/{productId}", method = RequestMethod.GET)
    public ResponseEntity<?> getAllbyproduct(@PathVariable String productId) {
        return new ResponseEntity<>(
                this.productDetailService.findAllByProductId(productId)
                        .stream()
                        .map(productDetail -> modelMapper.map(productDetail, ProductDetailDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK
        );

    }


    @RequestMapping(value = "/product-detail/search", method = RequestMethod.GET)
    public ResponseEntity<?> findByKeyword(@RequestParam String keyword) {
        return new ResponseEntity<>(
                this.productDetailService.findByKeyword(keyword).stream()
                        .map(productDetail -> modelMapper.map(productDetail, ProductDetailDTO.class))
                        .collect(Collectors.toList())
                , HttpStatus.OK);
    }


    @RequestMapping(value = "/product-detail/amount", method = RequestMethod.GET)
    public ResponseEntity<?> updateAmount(
            @RequestParam @NotNull String productDetailId,
            @RequestParam @NotNull Integer amount) {
        ProductDetails productDetails = this.productDetailService.findById(productDetailId);
        productDetails.setProductDetailAmount(amount);

        return new ResponseEntity<>(
                modelMapper.map(this.productDetailService.save(productDetails), ProductDetailDTO.class)
                , HttpStatus.OK);
    }
}
