package fpoly.datn.ecommerce_website.service;

import java.util.List;

public interface ServiceGenarel<T> {

    List<T> findAll();

    T findById(String id);

    T save(T entity);

    T update(T entity);

    void delete(String id);

    List<T> searchByName(String name);

}
