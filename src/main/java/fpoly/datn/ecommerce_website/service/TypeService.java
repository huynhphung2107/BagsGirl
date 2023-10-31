package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.entity.Types;
import org.springframework.data.domain.Page;

import java.util.List;

public interface TypeService{

    List<Types> findAll();

    Page<Types> findAllPagination(Integer page, Integer size);

    Types findById(String id);

    Types save(Types entity);

    Types update(String id, Types entity);

    Types updateStatus(String id, Integer status);

    String delete(String id);

    List<Types> searchByName(String name);

}
