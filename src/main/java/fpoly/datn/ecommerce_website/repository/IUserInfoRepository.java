package fpoly.datn.ecommerce_website.repository;

import fpoly.datn.ecommerce_website.entity.BaloDetail;
import fpoly.datn.ecommerce_website.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IUserInfoRepository extends JpaRepository<UserInfo, String> {

}
