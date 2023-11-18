package com.example.gamja_thon.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.gamja_thon.dto.CommentDto;
import com.example.gamja_thon.dto.ResponseCreateCommentDto;
import com.example.gamja_thon.entity.CommentEntity;
import com.example.gamja_thon.entity.PostEntity;
import com.example.gamja_thon.repository.CommentRepository;
import com.example.gamja_thon.repository.PostRepository;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;
    
    @Autowired
    private PostRepository postRepository;

    public ResponseCreateCommentDto addComment(Long postId, String content) {
        
        PostEntity post = postRepository.findById(postId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "게시물을 찾을 수 없습니다."));
        
        CommentEntity comment = new CommentEntity();
        comment.setPost(post);
        comment.setContents(content);
        
        CommentEntity savedComment = commentRepository.save(comment);

        return new ResponseCreateCommentDto(new CommentDto(savedComment.getContents()));
    }
    
    public List<CommentDto> getCommentsByPostId(Long postId) {
        PostEntity post = postRepository.findById(postId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "게시물을 찾을 수 없습니다."));
        
        List<CommentEntity> comments = commentRepository.findByPost(post); // postId 대신 post 엔티티 사용

        return comments.stream()
        	    .map(comment -> new CommentDto(comment.getContents()))
        	    .collect(Collectors.toList());
    }
}