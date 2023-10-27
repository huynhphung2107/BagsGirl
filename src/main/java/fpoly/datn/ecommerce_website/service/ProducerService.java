package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.entity.Producers;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProducerService<T> {

    List<Producers> findAll();

    Page<Producers> findAllPagination(Integer page, Integer size);

    Producers findById(String id);

    Producers save(Producers entity);

    Producers update(String id, Producers entity);

    Producers updateStatus(String id, Integer status);

    String delete(String id);

    List<Producers> searchByName(String name);

}
