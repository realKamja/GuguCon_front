package com.example.gamja_thon.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDto {
	private Long postId;
	private String title;
	private String contents;
	private List<CommentDto> comments;
	private String pathUrl;
}
