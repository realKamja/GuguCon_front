package com.example.gamja_thon.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.gamja_thon.entity.PointEntity;

@Repository
public interface PointRepository extends JpaRepository<PointEntity, Long> {
	
}