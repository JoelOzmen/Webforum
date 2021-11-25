package com.example.backend.service;

import com.example.backend.model.Post;
import com.example.backend.model.User;
import com.example.backend.model.viewModel.UserVM;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> findAll() {
        var users = userRepository.findAll();
        return users;
    }

    public User addUser(String username, String password) {
        boolean doUserExist = userRepository.existsUserByUsername(username);
        if (doUserExist) {
            return null;
        }
        else {
            User user = new User();
            user.setUsername(username);
            user.setPassword(password);
            return userRepository.save(user);
        }
    }

    public User findUser(long id) {
        return userRepository.findUserById(id);
    }

    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }

    public User login(String username, String password) {
        var tryLogin = userRepository.existsUserByUsernameAndPassword(username,password);
        if (tryLogin) {
            var user = userRepository.findByUsernameAndPassword(username,password);
            return user;
        }
        else{
            return null;
        }
        //return userRepository.existsUserByUsernameAndPassword(username,password);
    }
}