package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.FullProductDTO;
import fpoly.datn.ecommerce_website.dto.ImageDTO;
import fpoly.datn.ecommerce_website.dto.ProductDetailDTO;
import fpoly.datn.ecommerce_website.entity.Images;
import fpoly.datn.ecommerce_website.entity.ProductDetails;
import fpoly.datn.ecommerce_website.entity.Products;
import fpoly.datn.ecommerce_website.repository.IImageRepository;
import fpoly.datn.ecommerce_website.repository.IProductDetailRepository;
import fpoly.datn.ecommerce_website.repository.IProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FullProductServiceImpl {

    @Autowired
    private IProductRepository productRepository;

    @Autowired
    private IProductDetailRepository productDetailRepository;
    @Autowired
    private IImageRepository imageRepository;

    @Autowired
    private ModelMapper modelMapper;

    public List<FullProductDTO> getAllFullProducts() {
        List<Products> products = productRepository.findAll();

        return products.stream().map(product -> {
            FullProductDTO fullProductDTO = modelMapper.map(product, FullProductDTO.class);

            // Ánh xạ thông tin từ Images và ProductDetails nếu có
            if (product.getImages() != null && !product.getImages().isEmpty()) {
                fullProductDTO.setImg(modelMapper.map(product.getImages().get(0), ImageDTO.class));
            }
            if (product.getProductDetails() != null && !product.getProductDetails().isEmpty()) {
                fullProductDTO.setProductDetail(modelMapper.map(product.getProductDetails().get(0), ProductDetailDTO.class));
            }
            return fullProductDTO;
        }).collect(Collectors.toList());
    }



    //Chi tiet san pham
    public FullProductDTO findByListProductDetailById(String id) {
        Products product = productRepository.findById(id).orElse(null);

        if (product != null) {
            FullProductDTO fullProductDTO = modelMapper.map(product, FullProductDTO.class);

            if (product.getImages() != null && !product.getImages().isEmpty()) {
                fullProductDTO.setImg(modelMapper.map(product.getImages().get(0), ImageDTO.class));
            }

            if (product.getProductDetails() != null && !product.getProductDetails().isEmpty()) {
                fullProductDTO.setProductDetail(modelMapper.map(product.getProductDetails().get(0), ProductDetailDTO.class));
            }
            if (product.getProductDetails() != null && !product.getProductDetails().isEmpty()) {
                // Assuming setProductDetails is a method in FullProductDTO to set a list of ProductDetailDTO objects
                fullProductDTO.setImgs(
                        product.getImages().stream()
                                .map(detail -> modelMapper.map(detail, ImageDTO.class))
                                .collect(Collectors.toList())
                );
            }

            if (product.getProductDetails() != null && !product.getProductDetails().isEmpty()) {
                // Assuming setProductDetails is a method in FullProductDTO to set a list of ProductDetailDTO objects
                fullProductDTO.setProductDetails(
                        product.getProductDetails().stream()
                                .map(detail -> modelMapper.map(detail, ProductDetailDTO.class))
                                .collect(Collectors.toList())
                );
            }
            return fullProductDTO;
        }

        return null; // Trả về null nếu không tìm thấy sản phẩm
    }

    public FullProductDTO findByProductDetailById(String id) {
        Products product = productRepository.findById(id).orElse(null);

        if (product != null) {
            FullProductDTO fullProductDTO = modelMapper.map(product, FullProductDTO.class);

            if (product.getImages() != null && !product.getImages().isEmpty()) {
                fullProductDTO.setImg(modelMapper.map(product.getImages().get(0), ImageDTO.class));
            }

            if (product.getProductDetails() != null && !product.getProductDetails().isEmpty()) {
                fullProductDTO.setProductDetail(modelMapper.map(product.getProductDetails().get(0), ProductDetailDTO.class));
            }
            return fullProductDTO;
        }

        return null; // Trả về null nếu không tìm thấy sản phẩm
    }



}
