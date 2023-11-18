package com.example.gamja_thon.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.gamja_thon.entity.CommentEntity;
import com.example.gamja_thon.entity.PostEntity;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, Long>{
	List<CommentEntity> findByPost(PostEntity post);
}
