package com.example.backend;

import com.example.backend.service.PostService;
import com.example.backend.service.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles("test")
class BackendApplicationTests {

    @Autowired
    private UserService userService;

    @Autowired
    private PostService postService;

    @Test
    @Order(1)
    void registerUser() {
        Assertions.assertNotNull(userService.addUser("username1", "password"));
        Assertions.assertNotNull(userService.addUser("username2", "password"));
    }

    @Test
    @Order(2)
    void makePost() {
        Assertions.assertNotNull(postService.addPost("text1", 1));
        //Assertions.assertNotNull(postService.addPost("text", 2));
    }

    @Test
    void emptyTest()
    {

    }




}
