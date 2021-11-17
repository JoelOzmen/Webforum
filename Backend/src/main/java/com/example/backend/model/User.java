package com.example.backend.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Set;

//DO: Database Object
@Entity
public class User {

    //Id för användare i databasen
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    //Användarnamn i databasen
    @Column(name = "username", nullable = false, unique = true)
    private String username;

    //Lösenord i databasen
    @Column(name = "password", nullable = false)
    private String password;

    @OneToMany(mappedBy = "user")
    private Set<Post> posts;

    //Behöver väl någon sånhär?
    //public boolean isCorrectPassword(String password) { return this.password.equals(password);}

    //Standard get och set metoder
    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}