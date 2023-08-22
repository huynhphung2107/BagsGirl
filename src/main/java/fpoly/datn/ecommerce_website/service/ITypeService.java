package fpoly.datn.ecommerce_website.service;

import fpoly.datn.ecommerce_website.entity.Type;

import java.util.List;

public interface ITypeService {
    List<Type> findAll();

    Type findByID(String id);

    Type save(Type type);

    Type update(Type type);

    void delete(String id);
}
