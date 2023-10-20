package fpoly.datn.ecommerce_website.service;

import java.util.List;

public interface TypeService<T> {

    List<T> findAll();

    T findById(String id);

    T save(T entity);

    T update(String id, T entity);

    String delete(String id);

    List<T> searchByName(String name);

}
