package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Colors;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface IColorReponsitory extends JpaRepository<Colors, UUID> {
}
