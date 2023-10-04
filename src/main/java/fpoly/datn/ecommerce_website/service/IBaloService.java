package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.dto.BaloDTO;
import fpoly.datn.ecommerce_website.entity.Balo;
import org.springframework.data.domain.Page;

import java.util.List;

public interface IBaloService {

    Page<Balo> findAll(int pageNum, int PageSize);

    Balo findById(String id);

    Balo save(Balo entity);

    Balo update(Balo entity);

    Balo updateBaloStatus(String baloID, int status);

    String delete(String id);

    List<Balo> searchByName(String name);
}
