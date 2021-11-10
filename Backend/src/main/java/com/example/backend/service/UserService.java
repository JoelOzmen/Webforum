package com.example.backend.service;


import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public List<User> findAll()
    {
        return userRepository.findAll();
    }

    public User saveAndRedden(User user)
    {
        return userRepository.save(user);

    }
}
