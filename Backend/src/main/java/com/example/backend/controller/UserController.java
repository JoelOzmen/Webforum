package com.example.backend.controller;

import com.example.backend.model.Message;
import com.example.backend.model.Post;
import com.example.backend.model.User;
import com.example.backend.model.viewModel.LoginVM;
import com.example.backend.model.viewModel.MessageVM;
import com.example.backend.model.viewModel.PostVM;
import com.example.backend.model.viewModel.UserVM;
import com.example.backend.service.MessageService;
import com.example.backend.service.PostService;
import com.example.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.json.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(path = "/api/users")
public class UserController {

    final PostService postService;
    final MessageService messageService;
    final UserService userService;
    public UserController(UserService userService, PostService postService, MessageService messageService) {
        this.userService = userService;
        this.postService = postService;
        this.messageService = messageService;
    }

    @GetMapping
    public ResponseEntity getAllUsers() {
        var users = userService.findAll();
        return new ResponseEntity(users.toString(), HttpStatus.OK);
    }

    //http://localhost:8090/api/users/get/"id"
    @GetMapping(path = "/get/{id}")
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
    public ResponseEntity<UserVM> createUser(@RequestBody UserVM user) {
        User user1 = userService.addUser(user.username, user.password);

        if(user1 == null || user1.getUsername()==null || user1.getPassword() ==null ) {
            return new ResponseEntity(HttpStatus.IM_USED);
        }
        else{
            return new ResponseEntity(user1, HttpStatus.OK);
        }
    }

    //http://localhost:8090/api/users/delete/{id}
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity deleteUser(@PathVariable long id) {
        userService.deleteUser(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    //http://localhost:8090/api/users/login
    @PostMapping(path = "/login")
    public ResponseEntity loginApp(@RequestBody LoginVM loginVM) {
        var userId = userService.login(loginVM.getUsername(),loginVM.getPassword());
        var json = new JSONObject();
        try {
            json.put("id",userId.getId());
            json.put("user", userId.getUsername());
        }
        catch (JSONException e) {
            e.printStackTrace();
        }
        return new ResponseEntity(json.toString(),HttpStatus.OK);
    }

    //http://localhost:8090/api/users/user/"id"/posts
    @GetMapping(path = "/user/{id}/posts")
    public ResponseEntity<List<PostVM>> getPostsByUser(@PathVariable long id) {
        List<Post> posts = postService.getPostsByUserId(id);
        var vm = posts.stream().map(post -> new PostVM(post.getText(),
                post.getUser().getId(), post.getDate())).collect(Collectors.toList());
        return new ResponseEntity(vm, HttpStatus.OK);
    }

    //http://localhost:8090/api/users/user/"id"/messages
    @GetMapping(path = "/user/{id}/messages")
    public ResponseEntity<List<MessageVM>> getMessagesByUser(@PathVariable long id) {
        List<Message> messages = messageService.getMessagesById(id);
        var vm = messages.stream().map(message -> new MessageVM(message.getText(),
                message.getSender().getId(), message.getReceiver().getId(), message.getDate())).collect(Collectors.toList());
        return new ResponseEntity(vm, HttpStatus.OK);
    }
}