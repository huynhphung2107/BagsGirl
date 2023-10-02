package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.Balo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBaloRepository extends JpaRepository<Balo, String> {

    @Query("SELECT b from Balo b where b.baloStatus <> -1")
    public Page<Balo> getAllWithoutDelete(Pageable pageable);
}
