package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Color;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface IColorReponsitory extends JpaRepository<Color, UUID> {
}
