package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.ProductDTO;
import fpoly.datn.ecommerce_website.dto.Product_BrandDTO;
import fpoly.datn.ecommerce_website.entity.Products;
import fpoly.datn.ecommerce_website.repository.IProductRepository;
import fpoly.datn.ecommerce_website.service.IProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private final ModelMapper modelMapper;
    @Autowired
    private IProductRepository iproductRepository;

    public ProductServiceImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }


    @Override
    public String GetproductStatusString(int productStatus) {
        switch (productStatus) {
            case 1:
                return "Đang Hoạt Động";
            case 0:
                return "Dừng Hoạt Động";
            case -1:
                return "Hủy Hoạt Động";
            default:
                return "Not Valid";
        }
    }

    @Override
    public Page<ProductDTO> findAllPagination(int pageNum, int PageSize) {
        PageRequest pageRequest = PageRequest.of(pageNum, PageSize);
        Page<Products> productPage = this.iproductRepository.getAllWithoutDelete(pageRequest);

        List<ProductDTO> productDTOList = productPage.getContent()
                .stream().map(product -> modelMapper.map(product, ProductDTO.class))
                .collect(Collectors.toList());
        return new PageImpl<>(productDTOList, pageRequest, productPage.getTotalElements());
    }

    @Override
    public List<ProductDTO> findAll() {


        List<Products> productDTOList = this.iproductRepository.findAll();

        return productDTOList.stream().map(product -> modelMapper.map(product, ProductDTO.class))
                .toList();
    }

    @Override
    public List<Product_BrandDTO> test() {


        List<Products> productDTOList = this.iproductRepository.findAll();

        return productDTOList.stream().map(product -> modelMapper.map(product, Product_BrandDTO.class))
                .toList();
    }

    @Override
    public Products findById(String id) {
        return this.iproductRepository.findById(id).get();
    }

    @Override
    public Products save(Products entity) {
        return iproductRepository.save(entity);
    }

    @Override
    public Products update(Products entity) {
        return iproductRepository.save(entity);
    }

    @Override
    public Products updateProductStatus(String productID, int status) {
        Products product = iproductRepository.findById(productID).orElse(null);
        product.setProductStatus(status);
        return iproductRepository.save(product);
    }

    @Override
    public String delete(String id) {
        iproductRepository.deleteById(id);
        return "Delete successfully";
    }

    @Override
    public List<Products> searchByName(String name) {
        return null;
    }
}
