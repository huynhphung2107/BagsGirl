package fpoly.datn.ecommerce_website.controller.restController;

import fpoly.datn.ecommerce_website.dto.ProductDTO;
import fpoly.datn.ecommerce_website.dto.Product_BrandDTO;
import fpoly.datn.ecommerce_website.entity.Products;
import fpoly.datn.ecommerce_website.entity.Brands;
import fpoly.datn.ecommerce_website.service.serviceImpl.ProductServiceImpl;
import fpoly.datn.ecommerce_website.service.serviceImpl.BrandServiceImpl;
import jakarta.validation.Valid;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/manage")
@RestController
public class ProductRestController {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ProductServiceImpl productService;
    @Autowired
    private BrandServiceImpl brandService;

    public ProductRestController(ProductServiceImpl productService) {
        this.productService = productService;
    }

    //hienthi
    @RequestMapping(value = "/product/panagition", method = RequestMethod.GET)
    public ResponseEntity<?> getAll(
            @RequestParam(name = "page", defaultValue = "1") int pageNum,
            @RequestParam(name = "size", defaultValue = "10") int pageSize
    ) {
        Page<ProductDTO> productPage = productService.findAll(pageNum, pageSize);
        return new ResponseEntity<>
                (productPage, HttpStatus.OK);
    }


    @RequestMapping(value = "/product", method = RequestMethod.GET)
    public ResponseEntity<?> getOne(@RequestParam("id") String id) {
        return new ResponseEntity<>(
                modelMapper.map(this.productService.findById(id), ProductDTO.class)
                , HttpStatus.OK);
    }

    //add
    @RequestMapping(value = "/product", method = RequestMethod.POST)
    public ResponseEntity<?> add(@Valid @RequestBody Product_BrandDTO productBrandDTO) {

        Brands brand = brandService.findById(productBrandDTO.getBrandID());
        Products product = modelMapper.map(productBrandDTO, Products.class);
        product.setBrand(brand);
        return new ResponseEntity<>(productService.save(product), HttpStatus.OK);
    }

    //update
    @RequestMapping(value = "/product", method = RequestMethod.PUT)
    public ResponseEntity<?> update(@Valid @RequestBody ProductDTO productDTO) {
        return new ResponseEntity<>(productService.save(
                modelMapper.map(productDTO, Products.class)

        ), HttpStatus.OK);
    }

    @RequestMapping(value = "/product/update-status", method = RequestMethod.PUT)
    public ResponseEntity<?> updateStatus(@Valid @RequestParam String productID, @RequestParam int status) {
        return new ResponseEntity<>(productService.updateProductStatus(
                productID, status

        ), HttpStatus.OK);
    }

    //delete
    @RequestMapping(value = "/product", method = RequestMethod.DELETE)
    public ResponseEntity<?> remove(@RequestParam("id") String id) {
        productService.delete(productService.findById(id).getProductId());
        return new ResponseEntity<>("Delete Successfully!!!!!!", HttpStatus.NO_CONTENT);
    }
    //End
}
