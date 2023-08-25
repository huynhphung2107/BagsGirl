package fpoly.datn.ecommerce_website.service;

import java.util.List;

public interface ServiceGenarelTwo<T> {

    List<T> findAll();

    T findById(String id);

    T save(T entity);

    T update(T entity, String id);

    Boolean delete(String id);

    List<T> searchByName(String name);

}