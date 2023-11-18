package com.example.gamja_thon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gamja_thon.dto.RequestCreateCommentDto;
import com.example.gamja_thon.dto.ResponseCreateCommentDto;
import com.example.gamja_thon.service.CommentService;

@CrossOrigin(originPatterns="http://localhost:3000",  allowCredentials = "true")
@RestController
@RequestMapping("/api/comment")
public class CommentController {
	
	@Autowired
    private CommentService commentService;

    @PostMapping
    public ResponseEntity<ResponseCreateCommentDto> addComment(@RequestBody RequestCreateCommentDto commentDto) {
    	ResponseCreateCommentDto newComment = commentService.addComment(commentDto.getPostId(), commentDto.getContents());
        return new ResponseEntity<>(newComment, HttpStatus.CREATED);
    }
}
