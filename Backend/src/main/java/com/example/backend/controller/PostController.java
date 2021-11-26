package com.example.backend.controller;

import com.example.backend.model.Post;
import com.example.backend.model.viewModel.PostVM;
import com.example.backend.service.MessageService;
import com.example.backend.service.PostService;
import com.example.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping(path = "/api/post")
public class PostController {

    final UserService userService;
    final PostService postService;
    public PostController(PostService postService, UserService userService, MessageService messageService) {
        this.postService = postService;
        this.userService = userService;
    }

    //http://localhost:8090/api/post/publish
    @PostMapping(path = "/publish")
    public ResponseEntity createPost(@RequestBody PostVM post) {
        Post p = postService.addPost(post.text, post.userId);
        var vm = new PostVM(p.getText(), p.getUser().getId(), LocalDateTime.now());
        if (p == null) {
            return new ResponseEntity(HttpStatus.NOT_ACCEPTABLE);
        }
        else {
            return new ResponseEntity(vm, HttpStatus.OK);
        }
    }
}