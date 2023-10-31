package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.entity.BuckleTypes;
import fpoly.datn.ecommerce_website.entity.Types;
import org.springframework.data.domain.Page;

import java.util.List;

public interface BuckleTypeService {

    List<BuckleTypes> findAll();

    Page<BuckleTypes> findAllPagination(Integer page, Integer size);

    BuckleTypes findById(String id);

    BuckleTypes save(BuckleTypes entity);

    BuckleTypes update(String id, BuckleTypes entity);

    BuckleTypes updateStatus(String id, Integer status);

    String delete(String id);

    List<BuckleTypes> searchByName(String name);

}
