package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserInfoRepository extends JpaRepository<UserInfo, String> {
}
