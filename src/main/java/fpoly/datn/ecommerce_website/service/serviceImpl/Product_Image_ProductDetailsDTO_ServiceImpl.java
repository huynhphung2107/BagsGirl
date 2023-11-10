package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.FullProductDTO;
import fpoly.datn.ecommerce_website.entity.Images;
import fpoly.datn.ecommerce_website.entity.ProductDetails;
import fpoly.datn.ecommerce_website.repository.IImageRepository;
import fpoly.datn.ecommerce_website.repository.IProductDetailRepository;
import fpoly.datn.ecommerce_website.repository.IProductRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Product_Image_ProductDetailsDTO_ServiceImpl {
//    @Autowired
//    private IImageRepository imagesRepository;
//
//    @Autowired
//    private IProductRepository productsRepository;
//
//    @Autowired
//    private IProductDetailRepository productDetailsRepository;
//
//    @Autowired
//    private ModelMapper modelMapper;
//
//    public List<Product_Image_ProductDetailsDTO> getAllMappedData() {
//        List<Images> images = imagesRepository.findAll();
//        List<Products> products = productsRepository.findAll();
//        List<ProductDetails> productDetails = productDetailsRepository.findAll();
//
//        return productDetails.stream().map(pd -> {
//            Images img = findImageByProductId(images, pd.getProduct().getProductId());
//            Products prod = findProductById(products, pd.getProduct().getProductId());
//
//            Product_Image_ProductDetailsDTO dto = modelMapper.map(pd, Product_Image_ProductDetailsDTO.class);
//            dto.setImgUrl(img != null ? img.getImgUrl() : null);
//            dto.setProductName(prod != null ? prod.getProductName() : null);
//
//            return dto;
//        }).collect(Collectors.toList());
//
////        return products.stream().map(prod ->{
////            Images img = findImageByProductId(images, prod.getProductId());
////            ProductDetails pd = findProductDetailById(productDetails, prod.getProductId());
////            Product_Image_ProductDetailsDTO dto = modelMapper.map(pd, Product_Image_ProductDetailsDTO.class);
////            dto.setImgUrl(img != null ? img.getImgUrl() : null);
//////          dto.set//
////          return dto;
////
////        }).collect(Collectors.toList());
//    }
//
////    public List<Product_Image_ProductDetailsDTO> getAllMappedData() {
////        List<Images> images = imagesRepository.findAll();
////        List<Products> products = productsRepository.findAll();
////        List<ProductDetails> productDetails = productDetailsRepository.findAll();
////
////        return productDetails.stream().map(pd -> {
////            Images img = findImageByProductId(images, pd.getProduct().getProductId());
////            Products prod = findProductById(products, pd.getProduct().getProductId());
////
////            Product_Image_ProductDetailsDTO dto = modelMapper.map(pd, Product_Image_ProductDetailsDTO.class);
////            if (prod != null) {
////                dto.setProductId(prod.getProductId());
////                dto.setProductCode(prod.getProductCode());
////                dto.setProductName(prod.getProductName());
////            }
////            if (img != null) {
////                dto.setImgCode(img.getImgCode());
////                dto.setImgName(img.getImgName());
////                dto.setImgUrl(img.getImgUrl());
////            }
////
////            return dto;
////        }).collect(Collectors.toList());
////    }
//
//    private Images findImageByProductId(List<Images> images, String productId) {
//        return images.stream()
//                .filter(img -> img.getProducts().getProductId().equals(productId))
//                .findFirst()
//                .orElse(null);
//    }
//
//    private Products findProductById(List<Products> products, String productId) {
//        return products.stream()
//                .filter(prod -> prod.getProductId().equals(productId))
//                .findFirst()
//                .orElse(null);
//    }
//
//    private ProductDetails findProductDetailById(List<ProductDetails> productDetais, String productDetaiId) {
//        return productDetais.stream()
//                .filter(prod -> prod.getProductDetailId().equals(productDetaiId))
//                .findFirst()
//                .orElse(null);
//    }



    @Autowired
    private IImageRepository imagesRepository;

    @Autowired
    private IProductRepository productsRepository;

    @Autowired
    private IProductDetailRepository productDetailsRepository;

    @Autowired
    private ModelMapper modelMapper;


    public List<FullProductDTO> getAllMappedData() {
        List<Images> images = imagesRepository.findAll();
        List<ProductDetails> productDetails = productDetailsRepository.findAll();

        return productDetails.stream().map(pd -> {
            List<Images> relatedImages = findImagesByProductId(images, pd.getProduct().getProductId());
            FullProductDTO dto = modelMapper.map(pd, FullProductDTO.class);

            if (!relatedImages.isEmpty()) {
                Images img = relatedImages.get(0); // Lấy một hình ảnh liên quan, có thể xác định theo logic của bạn
                dto.setImgCode(img.getImgCode());
                dto.setImgName(img.getImgName());
                dto.setImgUrl(img.getImgUrl());
            }

            return dto;
        }).collect(Collectors.toList());
    }

    private List<Images> findImagesByProductId(List<Images> images, String productId) {
        return images.stream()
                .filter(img -> img.getProducts().getProductId().equals(productId))
                .collect(Collectors.toList());
    }

}
