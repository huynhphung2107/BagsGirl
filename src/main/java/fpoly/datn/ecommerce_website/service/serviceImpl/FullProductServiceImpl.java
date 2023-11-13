package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.FullProductDTO;
import fpoly.datn.ecommerce_website.dto.ProductDetailDTO;
import fpoly.datn.ecommerce_website.entity.Images;
import fpoly.datn.ecommerce_website.entity.ProductDetails;
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
    private IProductRepository productRepository;

    @Autowired
    private ModelMapper modelMapper;

    public List<FullProductDTO> getAllFullProducts() {
        List<Products> products = productRepository.findAll();

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



    //Chi tiet san pham
    public FullProductDTO findById(String id) {
        Products product = productRepository.findById(id).orElse(null);

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
//
//    List<FullProductDTO[]> result = productRepository.getAllProductWithId(id);
//    List<FullProductDTO> dtos = result.stream()
//            .map(arr -> new FullProductDTO((String) arr[0], (String) arr[1], (String) arr[2], (String) arr[3], (String) arr[4], (String) arr[5], (ProductDetailDTO) arr[6]))
//            .collect(Collectors.toList());
//

}
