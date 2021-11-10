package com.example.backend.service;


import com.example.backend.model.User;
import com.example.backend.model.viewModel.UserVM;
import com.example.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class UserService {

    final UserRepository userRepository;
    private UserVM userVM;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public List<UserVM> findAll()
    {
        var users = userRepository.findAll();
        List <UserVM> userVMS = new LinkedList<>();
        for (User u: users)
        {
            userVM = new UserVM(u.getId(),u.getUsername());
            userVMS.add(userVM);
        }
        //return userRepository.findAll();
        return userVMS;
    }

    public User saveAndRedden(User user)
    {
        return userRepository.save(user);

    }

    public void deleteUser(long id) {
         userRepository.deleteById(id);

    }
}
