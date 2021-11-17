package com.example.backend.service;

import com.example.backend.model.User;
import com.example.backend.model.viewModel.UserVM;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
        return userRepository.save(user);
    }

    public User findUser(long id) {
        return userRepository.findUserById(id);
    }

    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }

    public boolean login(String username, String password)
    {
        return userRepository.existsUserByUsernameAndPassword(username,password);
    }
}