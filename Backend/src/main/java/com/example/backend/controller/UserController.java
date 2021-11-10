package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.model.viewModel.UserVM;
import com.example.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/user")
public class UserController {
    final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //http://localhost:8090/api/user/users
    @GetMapping("/users")
    public ResponseEntity<List<UserVM>> getAllUsers() {
        var users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    //http://localhost:8090/api/user/"id"
    @GetMapping(path = "/{id}")
    public ResponseEntity<List<UserVM>> getUserById(@PathVariable long id) {
        UserVM user = userService.findUser(id);
        return new ResponseEntity(user, HttpStatus.OK);
    }

    //http://localhost:8090/api/user/add
    @PostMapping(path = "/add", consumes = ("application/json"), produces = "application/json")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User user1 = userService.saveAndRedden(user);
        return new ResponseEntity(user1, HttpStatus.OK);
    }

    //servicen borde prata med kontrollen via viewmodel, via view modellen pratar kontrollen och servicen
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}