package com.example.backend.model.viewModel;

public class UserVM {
    private String username;
    private Long id;

    //ViewModel
    public UserVM(Long id, String username) {
        this.id = id;
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }
}