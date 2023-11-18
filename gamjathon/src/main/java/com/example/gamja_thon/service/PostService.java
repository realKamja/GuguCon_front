package com.example.gamja_thon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.gamja_thon.dto.CommentDto;
import com.example.gamja_thon.dto.CreatePostDto;
import com.example.gamja_thon.dto.PostDto;
import com.example.gamja_thon.entity.CommentEntity;
import com.example.gamja_thon.entity.PostEntity;
import com.example.gamja_thon.repository.PostRepository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class PostService {
	
	@Autowired
    private PostRepository postRepository;
    
    // 생성
    public PostDto createPost(CreatePostDto createPostDto) {
        PostEntity postEntity = new PostEntity();
        postEntity.setTitle(createPostDto.getTitle());
        postEntity.setContents(createPostDto.getContents());
        
        PostEntity savedPost = postRepository.save(postEntity);

        List<CommentDto> commentDtoList = new ArrayList<>();
        Iterator<CommentEntity> commentIterator = savedPost.getComments().iterator();

        while(commentIterator.hasNext()) {
            CommentEntity comment = commentIterator.next();
            commentDtoList.add(new CommentDto(comment.getContents()));
        }

        return new PostDto(savedPost.getId(), savedPost.getTitle(), savedPost.getContents(), commentDtoList, savedPost.getPathUrl());
    }
    
    // 읽기
    public PostDto getPostById(Long id) {
    	
    	PostEntity postEntity = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "게시물이 존재하지 않습니다."));
    	
        List<CommentDto> commentDtoList = new ArrayList<>();
        Iterator<CommentEntity> commentIterator = postEntity.getComments().iterator();

        while(commentIterator.hasNext()) {
            CommentEntity comment = commentIterator.next();
            commentDtoList.add(new CommentDto(comment.getContents()));
        }

        return new PostDto(postEntity.getId(), postEntity.getTitle(), postEntity.getContents(), commentDtoList, postEntity.getPathUrl());
    }
    
    public List<PostDto> index() {
        List<PostEntity> postEntities = postRepository.findAll();
        List<PostDto> postDtos = new ArrayList<>();

        for (PostEntity postEntity : postEntities) {
            List<CommentDto> commentDtoList = new ArrayList<>();
            for (CommentEntity comment : postEntity.getComments()) {
                commentDtoList.add(new CommentDto(comment.getContents()));
            }
            PostDto postDto = new PostDto(postEntity.getId(), postEntity.getTitle(), postEntity.getContents(), commentDtoList, postEntity.getPathUrl());
            postDtos.add(postDto);
        }

        return postDtos;
    }
}