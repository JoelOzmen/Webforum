package com.example.backend.service;

import com.example.backend.model.Post;
import com.example.backend.model.User;
import com.example.backend.model.viewModel.PostVM;
import com.example.backend.repository.PostRepository;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class PostService {
    final PostRepository postRepository;
    final UserRepository userRepository;

    @Autowired
    public PostService(PostRepository postRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    public Post addPost(String text, long userId) {
        Post post = new Post();
        post.setText(text);
        post.setUser(userRepository.findUserById(userId));
        post.setDate(LocalDateTime.now());
        return postRepository.save(post);
    }

    public List<Post> getPostsByUserId(long id){
        return postRepository.findAllByUser_Id(id);
    }
}