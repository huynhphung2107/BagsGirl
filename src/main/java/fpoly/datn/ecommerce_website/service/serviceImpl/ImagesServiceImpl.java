package fpoly.datn.ecommerce_website.service.serviceImpl;

import fpoly.datn.ecommerce_website.dto.ImageDTO;
import fpoly.datn.ecommerce_website.entity.Images;
import fpoly.datn.ecommerce_website.repository.IImageRepository;
import fpoly.datn.ecommerce_website.service.IImagesService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ImagesServiceImpl implements IImagesService {

    @Autowired
    private IImageRepository iImageRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public List<ImageDTO> findAll() {
        return this.iImageRepository.findAll().stream()
                .map(img -> modelMapper.map(img, ImageDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public ImageDTO save(ImageDTO imageDTO) {
        Images images = this.iImageRepository.save(modelMapper.map(imageDTO, Images.class));
        return modelMapper.map(images, ImageDTO.class);
    }
}
