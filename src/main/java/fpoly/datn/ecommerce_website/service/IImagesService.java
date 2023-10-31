package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.ImageDTO;

import java.util.List;

public interface IImagesService {

    List<ImageDTO> findAll();

    ImageDTO save(ImageDTO imageDTO);
}
