package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.model.viewModel.UserVM;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class UserService {

    final UserRepository userRepository;
    private UserVM userVM;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserVM> findAll() {
        var users = userRepository.findAll();
        List<UserVM> userVMS = new LinkedList<>();
        for (User u : users) {
            userVM = new UserVM(u.getId(), u.getUsername());
            userVMS.add(userVM);
        }
        //return userRepository.findAll();
        return userVMS;
    }

    public User addUser(User user) {
       boolean doUserExist =userRepository.existsUserByUsername(user.getUsername());
        if (doUserExist)
        {
            return null;
        }
        else {
        return userRepository.save(user);
        }
    }

    public User findUser(long id) {
        return userRepository.findUserById(id);
    }

    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }

    public User login(String username, String password)
    {
        var tryLogin = userRepository.existsUserByUsernameAndPassword(username,password);
        if (tryLogin)
        {
            var user = userRepository.findByUsernameAndPassword(username,password);
            return user;
        }
        else{
            return null;
        }

        //return userRepository.existsUserByUsernameAndPassword(username,password);
    }
}