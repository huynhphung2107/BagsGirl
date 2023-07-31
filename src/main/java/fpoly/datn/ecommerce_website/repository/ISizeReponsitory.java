package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Size;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ISizeReponsitory extends JpaRepository<Size, UUID> {

}
