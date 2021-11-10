package com.example.backend.repository;

import com.example.backend.model.User;
import com.example.backend.model.viewModel.UserVM;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    List<User> findByUsername(String username);

    User deleteById(String id);

    UserVM findUserById(long id);
}