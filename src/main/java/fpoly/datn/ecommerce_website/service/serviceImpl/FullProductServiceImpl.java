package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.FullProductDTO;
import fpoly.datn.ecommerce_website.dto.ProductDetailDTO;
import fpoly.datn.ecommerce_website.entity.Products;
import fpoly.datn.ecommerce_website.repository.IProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FullProductServiceImpl {

    @Autowired
    private IProductRepository productsRepository;

    @Autowired
    private ModelMapper modelMapper;

    public List<FullProductDTO> getAllFullProducts() {
        List<Products> products = productsRepository.findAll();

        return products.stream().map(product -> {
            FullProductDTO fullProductDTO = modelMapper.map(product, FullProductDTO.class);

            // Ánh xạ thông tin từ Images và ProductDetails nếu có
            if (product.getImages() != null && !product.getImages().isEmpty()) {
                fullProductDTO.setImagesImgUrl(product.getImages().get(0).getImgUrl());
            }
            if (product.getProductDetails() != null && !product.getProductDetails().isEmpty()) {
                fullProductDTO.setProductDetail(modelMapper.map(product.getProductDetails().get(0), ProductDetailDTO.class));
            }

            return fullProductDTO;
        }).collect(Collectors.toList());
    }


    public FullProductDTO getOne(String id) {
        Products product = productsRepository.findById(id).orElse(null);

        if (product != null) {
            FullProductDTO fullProductDTO = modelMapper.map(product, FullProductDTO.class);

            // Ánh xạ thông tin từ Images và ProductDetails nếu có
            if (product.getImages() != null && !product.getImages().isEmpty()) {
                fullProductDTO.setImagesImgUrl(product.getImages().get(0).getImgUrl());
            }

            if (product.getProductDetails() != null && !product.getProductDetails().isEmpty()) {
                fullProductDTO.setProductDetail(modelMapper.map(product.getProductDetails().get(0), ProductDetailDTO.class));
            }

            return fullProductDTO;
        }

        return null; // Trả về null nếu không tìm thấy sản phẩm
    }
}
