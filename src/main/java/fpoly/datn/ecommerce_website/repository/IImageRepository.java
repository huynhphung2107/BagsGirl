package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImageRepository extends JpaRepository<Images, String> {
}
