package com.example.gamja_thon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gamja_thon.dto.CreatePostDto;
import com.example.gamja_thon.dto.PostDto;
import com.example.gamja_thon.service.PostService;

@CrossOrigin(originPatterns="http://localhost:3000",  allowCredentials = "true")
@RequestMapping("/api/post")
@RestController
public class PostController {
	
	@Autowired
    private PostService postService;
    
    // 게시글 작성
    @PostMapping
    public ResponseEntity<PostDto> createPost(@RequestBody CreatePostDto createPostDto) {
    	PostDto newPost = postService.createPost(createPostDto);
        return new ResponseEntity<>(newPost, HttpStatus.CREATED);
    }

    // 특정 번호의 게시글을 읽음
    @GetMapping("/{id}")
    public ResponseEntity<PostDto> getPostById(@PathVariable Long id) {
    	PostDto post = postService.getPostById(id);
        return new ResponseEntity<>(post, HttpStatus.OK);
    }
    
    // 전체 게시글 읽음
    @GetMapping("/getPosts")
	public List<PostDto> index(){
		return postService.index();
	}
}
