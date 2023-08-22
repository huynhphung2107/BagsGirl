package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.entity.Size;
import fpoly.datn.ecommerce_website.entity.Type;

import java.util.List;
import java.util.UUID;

public interface ISizeService {
    List<Size> findAll();

    Size findById(UUID id);

    Size save(Size size);

    Size update(Size size);

    void delete(UUID id);

}
