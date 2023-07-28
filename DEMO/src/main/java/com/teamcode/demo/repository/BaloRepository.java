package com.teamcode.demo.repository;

import com.teamcode.demo.entity.Balo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BaloRepository extends JpaRepository<Balo, String> {
}
