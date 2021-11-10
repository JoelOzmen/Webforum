package com.example.backend.controller;



import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class UserController {
    final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    //http://localhost:8090/api/users
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){

        var users = userService.findAll();

        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    //http://localhost:8090/api/add
    @PostMapping(path = "/add",consumes = ("application/json"))
    public User createUser(@RequestBody User user)
    {
       User user1 =userService.saveAndRedden(user);
       return user1;

    }
}
