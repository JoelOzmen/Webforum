package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.model.viewModel.LoginVM;
import com.example.backend.model.viewModel.UserVM;
import com.example.backend.service.UserService;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/users")
public class UserController {
    final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<UserVM>> getAllUsers() {
        var users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    //http://localhost:8090/api/users/"id"
    @GetMapping(path = "/{id}")
    public ResponseEntity getUserById(@PathVariable long id) {
        User user = userService.findUser(id);
        var json = new JSONObject();
        try {
            json.put("id", user.getId());
            json.put("username", user.getUsername());
        }
        catch (JSONException e) {
            e.printStackTrace();
        }
        return new ResponseEntity(json.toString(), HttpStatus.OK);
    }

    //http://localhost:8090/api/users/add
    @PostMapping(path = "/add")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User user1 = userService.addUser(user);
        if(user1 ==null)
        {
            return new ResponseEntity(user1, HttpStatus.IM_USED);
        }
        else{
            return new ResponseEntity(user1, HttpStatus.OK);
        }
    }

    //servicen borde prata med kontrollen via viewmodel, via view modellen pratar kontrollen och servicen
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    //http://localhost:8090/api/users/login
    @PostMapping(path = "/login")
    public ResponseEntity loginApp(@RequestBody LoginVM loginVM) {
        var userId=userService.login(loginVM.getUsername(),loginVM.getPassword());
        var json = new JSONObject();
        try {
                json.put("id",userId.getId());
            json.put("user", userId.getUsername());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return new ResponseEntity( json.toString(),HttpStatus.OK);
    }
}

